const express = require('express');
const { User } = require('../../db/models');

const friendsRouter = express.Router();

friendsRouter.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const userFrinends = await User.findAll({
      where: { id },
      include: 'SubjectUsers',
    });

    const friends = userFrinends[0].SubjectUsers.map((el) => el.dataValues);

    res.json(friends);
  } catch (error) {
    console.log(error);
  }
});

module.exports = friendsRouter;
