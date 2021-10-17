const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const user = require('./routes/user');
const article = require('./routes/article');
const category = require('./routes/category');
const auth = require('./routes/auth');
const quiz = require('./routes/quiz');
const { authenticateToken } = require('./utils/jwt');
const dotenv = require('dotenv');

dotenv.config();

require('./data/users');
require('./data/articles');
require('./data/date');
require('./data/question_report');
require('./data/categories');
require('./data/categories_question');
require('./data/questions');

const app = express();
const PORT = process.env.PORT;
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'pptnrml@gmail.com',
    pass: 'pptnrml12',
  },
});

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get('/', (req, res) => {
  res.render('index.ejs');
});
app.use('/api', auth);
app.use('/api', authenticateToken, user);
app.use('/api', authenticateToken, article);
app.use('/api', authenticateToken, category);
app.use('/api', authenticateToken, quiz);
console.log(`App running on https://localhost:${PORT}`);
app.listen(PORT);
