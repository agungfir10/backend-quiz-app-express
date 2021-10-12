const express = require('express');
const date = require('../data/date');
const users = require('../data/users');
const router = express.Router();
const { comparePassword, hashPassword } = require('../utils/password');
const { makeId } = require('../utils/makeId');
const { generateAccessToken } = require('../utils/jwt');

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

  const foundEmail = users.findIndex((e) => e.email == email);
  if (foundEmail === -1) {
    const id = users.length;
    user = {
      id,
      email,
      password: hashPassword(password),
      fullname,
      role: 1,
      avatar: 1,
      verify: false,
      createdAt: date,
      updatedAt: date,
    };
    users.push(user);
    res.status(200).json({
      status: 200,
      message: 'success',
      data: user,
    });
  } else {
    res.status(400).json({
      status: 400,
      message: 'email registered',
    });
  }
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
