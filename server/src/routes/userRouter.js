const express = require('express');
const bcrypt = require('bcrypt');

const { sign, verify } = require('jsonwebtoken');

const { User } = require('../../db/models');

const router = express.Router();
const avatarPaths = ['avatar1', 'avatar2', 'avatar3', 'avatar4'];

router.post('/signup', async (req, res) => {
  try {
    const { email, username, password } = req.body;

    // if (!(email && username && password)) {
    //   return res.status(400).json({ message: 'Заполните все поля' });
    // }

    const hashPassword = await bcrypt.hash(password, 10);

    const [user, created] = await User.findOrCreate({
      where: { email },
      defaults: {
        username,
        password: hashPassword,
        img: avatarPaths[Math.floor(Math.random() * 4)],
      },
    });

    if (!created) {
      return res.status(400).json({ message: 'Пользователь уже существует' });
    }

    const userInfo = { id: user.id, username, img: user.img };

    const token = sign(userInfo, process.env.JWT_SECRET);

    res
      .cookie('tokenJWT', token, { maxAge: 1000 * 60 * 60 * 24 })
      .status(200)
      .json(userInfo);
  } catch (error) {
    console.log(error);
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!(email && password)) {
      return res.status(400).json({ message: 'Заполните все поля' });
    }

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(400).json({ message: 'Пользователь не найден' });
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return res.status(400).json({ message: 'Указан неверный пароль' });
    }

    const userInfo = { id: user.id, username: user.username };

    const token = sign(userInfo, process.env.JWT_SECRET);

    res
      .cookie('tokenJWT', token, { maxAge: 1000 * 60 * 60 * 24 })
      .status(200)
      .json(userInfo);
  } catch (error) {
    console.log(error);
  }
});

router.get('/check', (req, res) => {
  const accessToken = req.cookies.tokenJWT;

  if (!accessToken) {
    return res.status(401).json({ message: 'У вас нет токена' });
  }

  const validToken = verify(accessToken, process.env.JWT_SECRET);

  if (!validToken) {
    return res.status(401).json({ message: 'Токен не валиден' });
  }

  res.locals.user = validToken;

  return res.status(200).json(validToken);
});

router.get('/logout', (req, res) => {
  res.clearCookie('tokenJWT').sendStatus(200);
  // .json({ message: 'Вы вышли из системы' });
});

router.patch('/edit', async (req, res) => {
  const { username } = req.body;
  const accessToken = req.cookies.tokenJWT;
  const validToken = verify(accessToken, process.env.JWT_SECRET);
  await User.update({ username }, { where: { id: validToken.id } });
  const changedName = await User.findByPk(validToken.id);
  console.log(validToken);
  // console.log(username);

  res.json(changedName);
});


module.exports = router;
