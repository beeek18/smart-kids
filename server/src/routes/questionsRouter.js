const express = require('express');
const { Question, Option } = require('../../db/models');

const questionsRouter = express.Router();

questionsRouter.get('/:categoryId', async (req, res) => {
  const question = await Question.findOne({ where: { categoryId: req.params.categoryId } });
  res.json(question);
});

questionsRouter.get('/:categoryId/options', async (req, res) => {
  const { categoryId } = req.params;
  try {
    const question = await Question.findOne({
      where: { categoryId },
      include: { model: Option },
    });
    res.json(question);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = questionsRouter;
