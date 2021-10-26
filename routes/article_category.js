const express = require('express');
const router = express.Router();
const { db } = require('../utils/db');
router
  .route('/article_categories')
  .get((req, res) => {
    db.query('SELECT id, name FROM article_categories', (err, results) => {
      res.status(200).json({
        status: 200,
        message: 'success',
        data: results.rows,
      });
    });
  })
  .post((req, res) => {
    const { category } = req.body;
    if (category === '') {
      res.status(400).json({
        status: 200,
        message: "category can't be empty",
      });
    } else {
    }
    db.query(
      `SELECT id FROM article_categories WHERE name='%${category}%'`,
      (err, results) => {
        if (err) {
          throw err;
        }
        if (results.rowCount === 0) {
          db.query(
            `INSERT INTO article_categories (name, created_at, updated_at) VALUES ('${category}',Now(), Now())`,
            (err, results) => {
              if (err) {
                throw err;
              }
              res.status(200).json({
                status: 200,
                message: 'success add category',
              });
            }
          );
        } else {
          res.status(400).json({
            status: 400,
            message: 'category already exists',
          });
        }
      }
    );
  });

module.exports = router;
