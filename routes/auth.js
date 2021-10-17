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

  const foundEmail = users.findIndex((e) => e.email == email);
  if (foundEmail !== -1) {
    const comparePass = comparePassword(password, users[foundEmail].password);

    if (comparePass) {
      res.status(200).json({
        status: 200,
        message: 'success',
        data: users[foundEmail],
        meta: {
          token: generateAccessToken({
            id: users[foundEmail].id,
            email: users[foundEmail].email,
          }),
        },
      });
    } else {
      res.status(400).json({
        status: 400,
        message: 'wrong password',
      });
    }
  } else {
    res.status(400).json({
      status: 400,
      message: 'email not found',
    });
  }
});
router.post('/auth/register', (req, res) => {
  const { email, password, fullname } = req.body;

  db.get(`SELECT * FROM users WHERE email='${email}'`, (err, row) => {
    if (row === undefined) {
      db.run(
        `INSERT INTO users VALUES(null, '${fullname}', '${email}', '${hashPassword(
          password
        )}')`,
        (err) => {
          db.get(`SELECT * FROM users WHERE email='${email}'`, (err, row) => {
            res.status(200).json({
              status: 200,
              message: 'success',
              data: row,
            });
          });
        }
      );
    } else {
      res.status(400).json({
        status: 400,
        message: 'email registered',
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
      message: 'email not registered',
    });
  }
});
module.exports = router;
