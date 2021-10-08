module.exports = question_reports = [
  {
    id_user: 1,
    correct_answer: 9,
    createdAt: '2021-10-06T04:07:28.713Z',
    updatedAt: '2021-10-06T04:07:28.713Z',
  },
  {
    id_user: 2,
    correct_answer: 10,
    createdAt: '2021-10-06T04:07:28.713Z',
    updatedAt: '2021-10-06T04:07:28.713Z',
  },
];

question_reports.sort((e, i) => {
  if (e.correct_answer < i.correct_answer) {
    return -1;
  }
  if (e.correct_answer > i.correct_answer) {
    return 1;
  }
  return 0;
});
