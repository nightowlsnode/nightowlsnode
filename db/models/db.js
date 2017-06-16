const Sequelize = require('sequelize');
const config = require('../../private/dbconfig');

let db = new Sequelize(config.databaseUrl, config.databaseOptions);

module.exports = db;