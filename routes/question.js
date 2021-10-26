const express = require('express');
const router = express.Router();
const { db } = require('../utils/db');

router
  .route('/questions')
  .get((req, res) => {
    db.query('SELECT * FROM questions', (err, results) => {
      if (err) {
        res.status(400).json({
          status: 400,
          message: 'Failed get questions',
        });
      } else {
        res.status(200).json({
          status: 200,
          message: 'Success get questions',
          data: results.rows,
        });
      }
    });
  })
  .post((req, res) => {
    const {
      id_category,
      id_subcategory,
      question,
      option_a,
      option_b,
      option_c,
      option_d,
      option_e,
      answer,
      // explain,
    } = req.body;

    db.query(
      `INSERT INTO questions (id_category, id_subcategory, question, option_a, option_b, option_c, option_d, option_e, answer, created_at, updated_at) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,Now(),Now()) RETURNING *`,
      [
        id_category,
        id_subcategory,
        question,
        option_a,
        option_b,
        option_c,
        option_d,
        option_e,
        answer,
      ],
      (err, results) => {
        if (err) {
          res.status(400).json({
            status: 400,
            message: err.message,
          });
        } else {
          res.status(200).json({
            status: 200,
            message: 'Success add question',
            data: results.rows[0],
          });
        }
      }
    );
  });

router.get(
  '/question_category/:id_category/question_subcaterogy/:id_subcategory',
  (req, res) => {
    const { id_category, id_subcategory } = req.params;

    db.query(
      `SELECT * FROM questions WHERE id_category=${id_category} AND id_subcategory=${id_subcategory}`,
      (err, results) => {
        if (err) {
          res.status(400).json({
            status: 400,
            message: 'Error request',
          });
        } else {
          res.status(200).json({
            status: 200,
            message: 'Success get questions',
            data: results.rows,
          });
        }
      }
    );
  }
);

module.exports = router;
