const express = require('express');
const { Question } = require('../../db/models');

const questionsRouter = express.Router();

questionsRouter.get('/:categoryId', (req, res) => {
  const question = Question.findOne({ where: { categoryId: req.params.categoryId } });
  res.json(question);
});

module.exports = questionsRouter;
