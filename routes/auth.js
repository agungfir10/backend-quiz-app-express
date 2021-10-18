const express = require('express');
const date = require('../data/date');
const users = require('../data/users');
const router = express.Router();
const { comparePassword, hashPassword } = require('../utils/password');
const { makeId } = require('../utils/makeId');
const { generateAccessToken } = require('../utils/jwt');
const path = require('path');
var sqlite3 = require('sqlite3').verbose();

var db = new sqlite3.Database(
  path.join(__dirname, '..', 'db', 'quiz.db'),
  sqlite3.OPEN_READWRITE,
  (err) => {
    if (err) throw err;
    console.log('database connected!');
  }
);

router.post('/auth/login', (req, res) => {
  const { email, password } = req.body;

  db.get(`SELECT * FROM users WHERE email='${email}'`, (err, row) => {
    if (row === undefined) {
      res.status(400).json({
        status: 400,
        message: 'Email not registered!',
      });
    } else {
      const passwordValid = comparePassword(password, row.password);

      if (!passwordValid) {
        res.status(400).json({
          status: 400,
          message: 'Wrong password!',
        });
      } else {
        res.status(200).json({
          status: 200,
          message: 'success',
          data: row,
          meta: {
            token: generateAccessToken({
              id: row.id,
              name: row.name,
              email: row.email,
            }),
          },
        });
      }
    }
  });
});
router.post('/auth/register', (req, res) => {
  const { name, email, password, avatar } = req.body;

  db.get(`SELECT * FROM users WHERE email='${email}'`, (err, row) => {
    if (row === undefined) {
      db.run(
        `INSERT INTO users (id, name, email, password, role, avatar, verify, token_verify, created_at, updated_at) VALUES (null, '${name}', '${email}', '${hashPassword(
          password
        )}',2 , ${avatar}, 0, '${makeId(
          email
        )}', datetime('now','localtime'), datetime('now','localtime'))`,
        (err) => {
          db.get(`SELECT * FROM users WHERE email='${email}'`, (err, row) => {
            if (row !== undefined) {
              const { id, name, email } = row;
              res.status(200).json({
                status: 200,
                message: 'Successfully registered',
                data: {
                  id,
                  name,
                  email,
                },
                token: generateAccessToken({ id, name, email, verify: 0 }),
              });
            } else {
              res.status(400).json({
                status: 400,
                message: 'Error registered',
              });
            }
          });
        }
      );
    } else {
      res.status(400).json({
        status: 400,
        message: 'Email has been registered',
      });
    }
  });
});

router.post('/auth/forgot_password', (req, res) => {
  const { email } = req.body;

  const foundID = users.findIndex((e) => e.email == email);

  if (foundID !== -1) {
    res.status(200).json({
      status: 200,
      message: 'success',
    });
  } else {
    res.status(400).json({
      status: 400,
      message: 'Email not registered',
    });
  }
});

router.post('/change_password', (req, res) => {
  const { old_password, new_password } = req.body;
});
module.exports = router;
