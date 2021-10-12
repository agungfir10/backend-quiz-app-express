const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const TOKEN_SECRET = process.env.TOKEN_SECRET;
module.exports = {
  generateAccessToken: function (payload) {
    return jwt.sign(payload, TOKEN_SECRET, {});
  },
  authenticateToken: function (req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (token == null) {
      res.status(401).json({
        status: 401,
        message: 'Unauthorized',
      });
    } else {
      jwt.verify(token, TOKEN_SECRET, (err, user) => {
        if (err)
          return res.status(403).json({ status: 403, message: 'Forbidden' });
        res.write;
        req.user = user;

        next();
      });
    }
  },
};
