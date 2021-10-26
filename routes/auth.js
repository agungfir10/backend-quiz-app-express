const express = require('express');
const router = express.Router();
const { comparePassword, hashPassword } = require('../utils/password');
const { makeId } = require('../utils/makeId');
const { generateAccessToken } = require('../utils/jwt');
const { transporter, mailOptions, templateEmail } = require('../utils/email');
const { db } = require('../utils/db');

router.post('/auth/login', (req, res) => {
  const { email, password } = req.body;

  db.query(
    `SELECT id,name,email,password,avatar FROM users WHERE email='${email}'`,
    (err, results) => {
      if (results.rowCount === 0) {
        res.status(400).json({
          status: 400,
          message: 'Email not registered!',
        });
      } else {
        const passwordValid = comparePassword(
          password,
          results.rows[0].password
        );

        if (!passwordValid) {
          res.status(400).json({
            status: 400,
            message: 'Wrong password!',
          });
        } else {
          const { id, name, email, avatar, verify } = results.rows[0];
          res.status(200).json({
            status: 200,
            message: 'success',
            data: {
              id,
              name,
              email,
              avatar,
              verify,
            },
            token: generateAccessToken({
              id,
              name,
              email,
            }),
          });
        }
      }
    }
  );
});

router.post('/auth/register', (req, res) => {
  const { name, email, password, avatar } = req.body;

  db.query(`SELECT * FROM users WHERE email='${email}'`, (err, results) => {
    if (err) {
      throw err;
    }
    if (results.rowCount === 0) {
      db.query(
        `INSERT INTO users (name, email, password, role, avatar, verify, token_verify, created_at, updated_at) VALUES ('${name}', '${email}', '${hashPassword(
          password
        )}',2 , ${avatar}, 0, '${makeId(email)}', Now(),  Now()) RETURNING *`,
        (err, results) => {
          if (err) {
            throw err;
          }
          if (results.rowCount !== 0) {
            const { id, name, email } = results.rows[0];
            res.status(200).json({
              status: 200,
              message: 'Successfully registered',
              data: {
                id,
                name,
                email,
              },
              token: generateAccessToken({ id, name, email }),
            });
          } else {
            res.status(400).json({
              status: 400,
              message: 'Error registered',
            });
          }
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

  db.query(`SELECT id FROM users WHERE email='${email}'`, (err, results) => {
    if (results.rowCount !== 0) {
      res.status(200).json({
        status: 200,
        message: 'Success, check your email to change password!',
      });
    } else {
      res.status(400).json({
        status: 400,
        message: 'Email not registered',
      });
    }
  });
});

router.post('/auth/change_password', (req, res) => {
  const { id, old_password, new_password } = req.body;

  db.query(`SELECT id,password FROM users WHERE id=${id}`, (err, results) => {
    if (err) {
      res.status(400).json({
        status: 400,
        message: 'Error changes password',
      });
      throw err;
    }
    if (results.rowCount !== 0) {
      const { password } = results.rows[0];
      const passwordValid = comparePassword(old_password, password);
      if (passwordValid) {
        db.query(
          `UPDATE users SET password='${hashPassword(
            new_password
          )}' WHERE id=${id}`,
          (err, results) => {
            if (err) {
              res.status(400).json({
                status: 400,
                message: 'Error to change password',
              });
            } else {
              if (results.rowCount !== 0) {
                res.status(200).json({
                  status: 200,
                  message: 'Password changed',
                });
              } else {
                res.status(400).json({
                  status: 400,
                  message: 'Failed to change password',
                });
              }
            }
          }
        );
      } else {
        res.status(400).json({
          status: 400,
          message: 'Password not match!',
        });
      }
    } else {
      res.status(400).json({
        status: 400,
        message: 'User not found to changes password',
      });
    }
  });
});

router.get('/auth/verify', (req, res) => {
  const { token_verify } = req.query;
  if (token_verify === undefined) {
    res.status(400).json({
      status: 400,
      message: 'Verify failed',
    });
  } else {
    db.query(
      `SELECT id FROM users WHERE token_verify='${token_verify}'`,
      (err, results) => {
        if (err) {
          throw err;
        }

        if (results.rowCount === 0) {
          res.status(400).json({
            status: 400,
            message: 'User not found!',
          });
        } else {
          const { id } = results.rows[0];

          db.query(
            `UPDATE users SET verify=1 WHERE id=${id}`,
            (err, results) => {
              if (err) {
                throw err;
              }
              if (results.rowCount === 1) {
                res.status(200).json({
                  status: 200,
                  message: 'Success verified',
                });
              }
            }
          );
        }
      }
    );
  }
});

router.post('/auth/send_link_verification', (req, res) => {
  const { id } = req.body;

  db.query(`SELECT id, verify FROM users WHERE id=${id}`, (err, results) => {
    if (results.rowCount === 0) {
      res.status(400).json({
        status: 400,
        message: 'User not found',
      });
    } else {
      res.status(200).json({
        status: 200,
        message: 'Verification link has been sent',
      });
    }
  });
});
module.exports = router;
