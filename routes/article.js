const express = require('express');
const router = express.Router();
const { db } = require('../utils/db');

router
  .route('/articles')
  .get((req, res) => {
    db.query(
      'SELECT articles.id, articles.title, articles.body, articles.created_at, article_categories.name AS category FROM articles INNER JOIN article_categories ON article_categories.id = articles.category',
      (err, results) => {
        // articleFormatted.body = article.body.replace(/(<([^>]+)>)/gi, '');
        if (err) {
          throw err;
        }
        if (results.rowCount !== 0) {
          res.json({
            status: 200,
            message: 'success',
            data: results.rows,
          });
        } else {
          res.json({
            status: 400,
            message: 'success',
            data: results.rows,
          });
        }
      }
    );
  })
  .post((req, res) => {
    const { title, body, category } = req.body;

    db.query(
      `INSERT INTO articles (title, body, category, created_at, updated_at) VALUES ('${title}','${body}',${category},Now(), Now())`,
      (err, results) => {
        if (results.rowCount === 0) {
          res.status(400).send({
            status: 400,
            message: 'Error added article',
          });
        } else {
          res.status(200).send({
            status: 200,
            message: 'Success add article',
            data: results.rows[0],
          });
        }
      }
    );
  });

router
  .route('/articles/:id')
  .get((req, res) => {
    const { id } = req.params;
    db.query(`SELECT * FROM articles WHERE id=${id}`, (err, results) => {
      if (results.rowCount !== 0) {
        res.status(200).json({
          status: 200,
          message: 'success',
          data: results.rows[0],
        });
      } else {
        res.status(400).json({
          status: 400,
          message: 'Article not found',
        });
      }
    });
  })
  .delete((req, res) => {
    const { id } = req.params;

    db.query(`SELECT * FROM articles WHERE id=${id}`, (err, results) => {
      if (results.rowCount !== 0) {
        res.status(200).json({
          status: 200,
          message: 'Delete article success',
        });
      } else {
        res.status(400).json({
          status: 400,
          message: 'Article not found',
        });
      }
    });
  })
  .put((req, res) => {
    const { id } = req.params;
    const { title, body, category } = req.body;

    db.query(`SELECT * FROM articles WHERE id=${id}`, (err, results) => {
      if (results.rowCount !== 0) {
        db.query(
          `UPDATE articles SET title='${title}' body='${body}' category=${category} updated_at=Now() WHERE id=${id}`,
          (err, results) => {
            if (results.rowCount !== 0) {
              res.status(200).json({
                status: 200,
                message: 'Has successfully changed the article',
                data: results.rows[0],
              });
            } else {
              res.status(200).json({
                status: 200,
                message: 'Has failed to modify the article',
              });
            }
          }
        );
      }
    });
  });
module.exports = router;
