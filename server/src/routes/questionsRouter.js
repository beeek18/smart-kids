const express = require('express');
const { Question } = require('../../db/models');

const questionsRouter = express.Router();

questionsRouter.get('/:categoryId', async (req, res) => {
  const question = await Question.findAll({ where: { categoryId: req.params.categoryId } });
  res.json(question);
});

module.exports = questionsRouter;
