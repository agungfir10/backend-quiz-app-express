const express = require('express');
const cors = require('cors');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');
const templateEmail = require('./templateEmail');
const multer = require('multer');
const path = require('path');
// membuat konfigurasi diskStorage multer
const diskStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '/public/uploads'));
  },
  // konfigurasi penamaan file yang unik
  filename: function (req, file, cb) {
    let namefile = '-' + Date.now() + path.extname(file.originalname);
    images.push('photo' + namefile);
    cb(null, file.fieldname + namefile);
  },
});
require('./data/user');
require('./data/article');
require('./data/date');
require('./data/question_report');

const user = require('./routes/user');
const article = require('./routes/article');
const main = require('./routes/main');
const image = require('./data/image');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT;
const TOKEN_SECRET = process.env.TOKEN_SECRET;
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ristantisarip@gmail.com',
    pass: 'ristantisarip123',
  },
});

function generateAccessToken(payload) {
  return jwt.sign(payload, TOKEN_SECRET, {});
}

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  // if (token == null) return res.sendStatus(401);

  if (token == null) {
    res.status(400).json({
      status: 400,
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
}

function hashPassword(password) {
  return bcrypt.hashSync(password, 10);
}

function comparePassword(password, hash) {
  return bcrypt.compareSync(password, hash);
}

function makeid(length, email) {
  var result = '';
  var characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789' + email;
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

// menerapkan middleware multer hanya pada rute berikut
app.post(
  '/api/upload',
  multer({ storage: diskStorage }).single('photo'),
  (req, res) => {
    const file = req.file.path;
    if (!file) {
      res.status(400).send({
        status: 400,
        data: 'No File is selected.',
      });
    }
    res.status(200).json({
      status: 200,
      message: 'Success upload',
      data: images[images.length - 1],
    });
  }
);

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use('/', main);

app.use('/api', user);
app.use('/api', article);
console.log(`App running on https://localhost:${PORT}`);
app.listen(PORT);
