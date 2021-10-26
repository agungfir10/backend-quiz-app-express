const express = require('express');
const cors = require('cors');
const user = require('./routes/user');
const article = require('./routes/article');
const article_category = require('./routes/article_category');
const question_category = require('./routes/question_category');
const question_subcategory = require('./routes/question_subcategory');
const question = require('./routes/question');
const question_report = require('./routes/question_report');
const auth = require('./routes/auth');
const { authenticateToken } = require('./utils/jwt');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
const PORT = process.env.PORT;

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get('/', (req, res) => {
  res.render('index.ejs');
});
app.use('/api', auth);
app.use('/api', user);
app.use('/api', article);
app.use('/api', article_category);
app.use('/api', question_category);
app.use('/api', question_subcategory);
app.use('/api', question);
app.use('/api', question_report);
console.log(`App running on https://localhost:${PORT}`);
app.listen(PORT);
