const config = require('../private/dbconfig');

const sequelizeConfig = { url: config.databaseUrl, dialect: 'postgres' };

module.exports = sequelizeConfig;
