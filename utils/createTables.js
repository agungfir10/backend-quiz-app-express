const path = require('path');
var sqlite3 = require('sqlite3').verbose();

var db = new sqlite3.Database(path.join(__dirname, '..', 'db', 'quiz.db'));

db.serialize(function () {
  // db.run(
  //   'CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(255), email VARCHAR(255), password VARCHAR(255))'
  // );
  // db.run(
  //   'INSERT INTO users (id, name, email, password) VALUES (null, "Agung Firmansyah", "agungfirid@gmail.com","secret")'
  // );
  // db.each('SELECT * FROM users', (err, row) => {
  //   data = row;
  // });
  // db.each('SELECT * FROM users WHERE id=1', (err, row) => {
  //   console.log(row);
  //   console.log(err);
  //   console.log(row === null);
  //   console.log(row === undefined);
  //   console.log(row === '');
  // });
  // db.each('SELECT * FROM users', (err, row) => {
  //   console.log(row);
  //   console.log(row === {});
  // });
  db.get('SELECT * FROM users WHERE id=10', (err, row) => {
    console.log(row);
    console.log(row === undefined);
  });
});

db.close();
