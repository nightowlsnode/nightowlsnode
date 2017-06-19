const Sequelize = require('sequelize');
const config = require('../../private/dbconfig');

const db = new Sequelize(config.databaseUrl, config.databaseOptions);

db
  .authenticate()
  .then(() => console.log('Connection has been established successfully.'))
  .catch(err => console.log('Unable to connect to the database:', err));

module.exports = db;
