const express = require('express');
const { db } = require('../utils/db');
const router = express.Router();

router
  .route('/question_categories')
  .get((req, res) => {
    db.query('SELECT * FROM question_categories', (err, results) => {
      if (err) {
        res.status(400).json({
          status: 400,
          message: 'Failed get questions categories',
        });
      } else {
        res.status(200).json({
          status: 200,
          message: 'Success get question categories',
          data: results.rows,
        });
      }
    });
  })
  .post((req, res) => {
    const { name, image } = req.body;
    db.query(
      `INSERT INTO question_categories (name, image, created_at, updated_at) VALUES ('${name}','${image}',Now(), Now()) RETURNING *`,
      (err, results) => {
        if (err) {
          res.status(400).json({
            status: 400,
            message: 'Error save category question',
          });
        } else {
          if (results.rowCount !== 0) {
            res.status(200).json({
              status: 200,
              message: 'Success request',
              data: results.rows[0],
            });
          } else {
            res.status(400).json({
              status: 400,
              message: 'Bad request',
            });
          }
        }
      }
    );
  });

router.get('/question_categories/:id', (req, res) => {
  const { id } = req.params;
  db.query(
    `SELECT * FROM question_categories WHERE id=${id}`,
    (err, results) => {
      if (results !== 0) {
        res.status(200).json({
          status: 200,
          message: 'Success get question category',
          data: results.rows[0],
        });
      } else {
        res.status(400).json({
          status: 400,
          message: 'Bad request',
        });
      }
    }
  );
});

router.put('/question_categories/:id', (req, res) => {
  const { name, image } = req.body;
  const { id } = req.params;
  db.query(
    `UPDATE question_categories SET name='${name}' image='${image}' WHERE id=${id}`
  );
});

module.exports = router;
