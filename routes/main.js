const express = require('express');
const router = express.Router();

router.get('/leaderboard', (req, res) => {
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
  res.render('leaderboard.ejs', { reports });
});

router.get('/', (req, res) => {
  res.render('index.ejs', { users });
});

module.exports = router;
