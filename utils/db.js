const Pool = require('pg').Pool;
const dotenv = require('dotenv');
dotenv.config();

const config = {
  connectionString:
    'postgres://edtcdrjygiaxtr:219df59f9419ddf166af5d4a0ad14625bdd0b659da07396f08ae8781b90e3038@ec2-54-164-56-10.compute-1.amazonaws.com:5432/d8ljgo1cuutq36',
  ssl: {
    rejectUnauthorized: false,
  },
};
module.exports = {
  db: new Pool(config),
};
