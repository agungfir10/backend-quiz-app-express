const express = require('express');
const { body, validationResult } = require('express-validator');
const { db } = require('../utils/db');
const router = express.Router();

router
  .route('/question_reports')
  .get((req, res) => {
    db.query(
      'SELECT question_reports.id_user,users.name, SUM(question_reports.point)::int as point FROM question_reports INNER JOIN users ON users.id=question_reports.id_user GROUP BY question_reports.id_user, users.name',
      (err, results) => {
        if (err) {
          console.log(err.message);
          res.status(400).json({
            status: 400,
            message: 'Error request',
          });
        } else {
          res.status(200).json({
            status: 200,
            message: 'Success get question reports',
            data: results.rows,
          });
        }
      }
    );
  })
  .post(
    body('id_user').notEmpty(),
    body('id_subcategory_question').notEmpty(),
    body('point').notEmpty(),
    (req, res) => {
      const { id_user, id_subcategory_question, point } = req.body;

      const errors = validationResult(req);

      if (errors.isEmpty()) {
        db.query(
          `SELECT * FROM question_reports WHERE id_user=${id_user}`,
          (err, results) => {
            if (err) {
              res.status(400).json({
                status: 400,
                message: 'Error request',
              });
            } else {
              if (results.rowCount === 0) {
                db.query(
                  `INSERT INTO question_reports (id_user, id_subcategory_question, point) VALUES ($1, $2, $3) RETURNING *`,
                  [id_user, 1, point],
                  (err, results) => {
                    if (err) {
                      res.status(400).json({
                        status: 400,
                        message: 'Error request',
                      });
                    } else {
                      res.status(200).json({
                        status: 200,
                        message: 'Success add question reports',
                        data: results.rows[0],
                      });
                    }
                  }
                );
              } else {
                db.query(
                  `UPDATE question_reports SET point=${point} WHERE id_user=${id_user}`,
                  (err, results) => {
                    if (err) {
                      res.status(400).json({
                        status: 400,
                        message: 'Error request',
                      });
                    } else {
                      res.status(200).json({
                        status: 200,
                        message: 'Success add question reports',
                        data: results.rows[0],
                      });
                    }
                  }
                );
              }
            }
          }
        );
      } else {
        res.status(400).json({
          status: 400,
          message: `${errors.array()[0].msg} ${errors.array()[0].param} `,
        });
      }
    }
  );
module.exports = router;
