const express = require('express');
const router = express.Router();

router.get('/categories_quiz', (req, res) => {
  res.status(200).json({
    status: 200,
    message: 'success',
    data: categories_question,
  });
});

router.get('/questions_quiz/:id', (req, res) => {
  const { id } = req.params;

  const foundID = questions.findIndex((e) => e.id == id);

  if (foundID === -1) {
    res.status(400).json({
      status: 400,
      message: 'Quiz Not Found',
    });
  } else {
    res.status(200).json({
      status: 200,
      message: 'success',
      data: questions[foundID],
    });
  }
});

router.get('/questions_quiz', (req, res) => {
  res.status(200).json({
    status: 200,
    message: 'success',
    data: questions,
  });
});
module.exports = router;
