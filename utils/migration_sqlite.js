const path = require('path');
const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database(path.join(__dirname, '..', 'db', 'quiz.db'));

const queryCreateTableUser = `CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(255),
    email VARCHAR(255),
    password VARCHAR(255),
    role INTEGER(2),
    avatar INTEGER(1),
    verify INTEGER(1),
    token_verify VARCHAR(255),
    created_at VARCHAR(50),
    updated_at VARCHAR(50)
    )`;
const queryCreateTableArticle = `CREATE TABLE IF NOT EXISTS articles (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title VARCHAR(255),
    body TEXT,
    video VARCHAR(255),
    category INTEGER(2),
    created_at VARCHAR(50),
    updated_at VARCHAR(50)
    )`;
const queryCreateTableCategory = `CREATE TABLE categories (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name VARCHAR(255)
    )`;
db.serialize(function () {
  db.run('DROP TABLE IF EXISTS users');
  db.run('DROP TABLE IF EXISTS articles');
  db.run('DROP TABLE IF EXISTS categories');

  db.run(queryCreateTableUser);
  db.run(queryCreateTableArticle);
  db.run(queryCreateTableCategory);
});

db.close();
