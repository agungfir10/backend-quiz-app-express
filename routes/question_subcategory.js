const express = require('express');
const { db } = require('../utils/db');
const router = express.Router();

router
  .route('/question_subcategories')
  .get((req, res) => {
    db.query('SELECT * FROM question_subcategories', (err, results) => {
      if (err) {
        res.status(400).json({
          status: 400,
          message: 'Error request',
        });
      } else {
        res.status(200).json({
          status: 200,
          message: 'Success get sub categories',
          data: results.rows,
        });
      }
    });
  })
  .post((req, res) => {
    const { name, id_category, duration } = req.body;

    db.query(
      `INSERT INTO question_subcategories (name, id_category, duration, created_at, updated_at) VALUES ('${name}',${id_category},${duration}, NOW(), NOW()) RETURNING *`,
      (err, results) => {
        if (err) {
          res.status(400).json({
            status: 400,
            message: 'Error save subcategories',
          });
        } else {
          res.status(200).json({
            status: 200,
            message: 'Success add subcategories',
            data: results.rows[0],
          });
        }
      }
    );
  });

router.get('/question_category/:id', (req, res) => {
  const { id } = req.params;

  db.query(
    `SELECT * FROM question_subcategories INNER JOIN question_categories ON question_categories.id = question_subcategories.id_category WHERE id_category=${id} `,
    (err, results) => {
      if (err) {
        res.status(400).json({
          status: 400,
          message: err.message,
        });
      } else {
        res.status(200).json({
          status: 200,
          message: 'Success get question subcategory',
          name: results.rows[0].name,
          data: results.rows,
        });
      }
    }
  );
});
module.exports = router;
