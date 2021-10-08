const express = require('express');
const response = require('../data/response');
const router = express.Router();

router.route('/leaderboard').get((req, res) => {
  let reports = [];

  question_reports.forEach((report) => {
    let findID = users.findIndex((e, i) => e.id == report.id_user);
    reports.push({
      id: report.id,
      fullname: users[findID].fullname,
      correct_answer: report.correct_answer,
    });
  });
  reports.reverse();
  response.status = 200;
  response.message = 'success';
  response.data = reports;

  res.status(200).json(response);
  delete response.data;
});

module.exports = router;
