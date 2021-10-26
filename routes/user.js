const express = require('express');
const router = express.Router();
const { body, param, validationResult } = require('express-validator');
const { authenticateToken } = require('../utils/jwt');
const { db } = require('../utils/db');

router
  .route('/users')
  .get((req, res) => {
    db.query(
      'SELECT id,name, email, created_at, updated_at FROM users',
      (err, results) => {
        if (err) {
          res.status(400).json({
            status: 200,
            message: err.message,
          });
        } else {
          res.status(200).json({
            status: 200,
            message: 'success',
            data: results.rows,
          });
        }
      }
    );
  })
  .post(
    authenticateToken,
    body('email').isEmail(),
    body('name').isEmpty(),
    body('password').isLength({ min: 6 }),
    (req, res) => {
      const errors = validationResult(req);
      if (errors.isEmpty()) {
        const { email, password, name, avatar } = req.body;

        res.status(200).json({
          status: 200,
          message: 'Success register',
          data: user,
        });
      } else {
        res.status(400).json({
          status: 400,
          message: 'Please fill input form',
        });
      }
    }
  );

router.delete(
  '/users/:id',
  authenticateToken,
  param('id').isEmpty(),
  (req, res) => {
    const { id } = req.params;

    const errors = validationResult(req);
    if (errors.isEmpty()) {
      if (findID !== -1) {
        users.splice(findID, (findID += 1));

        res.status(200).json({
          status: 200,
          message: 'Success delete',
        });
      } else {
        res.status(400).json({
          status: 400,
          message: 'Failed delete',
        });
      }
    } else {
      res.status(400).json({
        status: 400,
        message: 'error',
      });
    }
  }
);

router.get(
  '/users/:id',
  authenticateToken,
  param('id').isEmpty(),
  (req, res) => {
    const { id } = req.param;

    const findID = users.findIndex((user, index) => user.id == id);
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      if (findID !== -1) {
        res.status(200).json({
          status: 200,
          message: 'success',
          data: users[findID],
        });
      } else {
        res.status(400).json({
          status: 400,
          message: 'User not found',
        });
      }
    } else {
      res.status(400).json({
        status: 400,
        message: 'error',
      });
    }
  }
);
module.exports = router;
