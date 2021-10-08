const express = require('express');
const router = express.Router();
const { body, param, validationResult } = require('express-validator');
router
  .route('/users')
  .get((req, res) => {
    res.status(200).json({
      status: 200,
      message: 'success',
      data: users,
    });
  })
  .post(
    body('email').isEmail(),
    body('password').isLength({ min: 6 }),
    (req, res) => {
      const errors = validationResult(req);
      if (errors.isEmpty()) {
        const { email, password, fullname, avatar } = req.body;
        const user = {
          id: users.length + 1,
          email,
          password,
          fullname,
          avatar: avatar || 1,
          createdAt: date,
          updatedAt: date,
        };
        users.push(user);
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
  )
  .put((req, res) => {
    const { email, password, fullname, avatar } = req.body;
    console.log(email, password, fullname, avatar);
    res.send('PUT /api/users/');
  });
router.delete('/users/:id', param('id').isEmpty(), (req, res) => {
  const { id } = req.params;
  let findID = users.findIndex((user, index) => user.id == id);

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
});
module.exports = router;
