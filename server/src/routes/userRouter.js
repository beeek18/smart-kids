const express = require('express');
const bcrypt = require('bcrypt');

const { User } = require('../../db/models');
const { isAuth } = require('../middleware');

const router = express.Router();

router.post('/signup', async (req, res) => {
  try {
    const { email, username, password } = req.body;

    const hashPassword = await bcrypt.hash(password, 10);

    const [user, created] = await User.findOrCreate({
      where: { email },
      defaults: {
        username,
        password: hashPassword,
        img: 'avatar1',
      },
    });

    if (!created) {
      return res.status(400).send({ message: 'Пользователь уже существует' });
    }

    const userInfo = { id: user.id, username, img: user.img, status: 'logged', crown: user.crown };
    req.session.user = userInfo;

    res.status(200).json(userInfo);
  } catch (error) {
    console.log(error);
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!(email && password)) {
      return res.status(400).send({ message: 'Заполните все поля' });
    }

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(400).send({ message: 'Пользователь не найден' });
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return res.status(400).send({ message: 'Указан неверный пароль' });
    }

    const userInfo = {
      id: user.id,
      username: user.username,
      img: user.img,
      status: 'logged',
      crown: user.crown,
    };

    req.session.user = userInfo;

    res.status(200).json(userInfo);
  } catch (error) {
    console.log(error);
  }
});

router.get('/check', async (req, res) => {
  if (req.session?.user?.id) {
    return res.json(req.session.user);
  }
  return res.sendStatus(401);
});

router.get('/logout', isAuth, (req, res) => {
  req.session.destroy();
  res.clearCookie('user_sid');
  res.sendStatus(200);
});

router.patch('/edit', async (req, res) => {
  const { username } = req.body;
  const { id } = req.session.user;
  await User.update({ username }, { where: { id } });
  const changedName = await User.findByPk(id);
  res.json(changedName);
});
router.patch('/edit/avatar', async (req, res) => {
  const { img } = req.body;
  const { id } = req.session.user;
  await User.update({ img }, { where: { id } });
  const changedImg = await User.findByPk(id);
  res.json(changedImg);
});
router.patch('/:id/add/crown', async (req, res) => {
  const { id } = req.params;
  const { crown } = await User.findByPk(id);

  await User.update({ crown: crown + 10 }, { where: { id } });

  const changedCrown = await User.findByPk(id);
  res.json(changedCrown);
});

module.exports = router;
