const config = require('../private/dbconfig.js');

const sequelizeConfig = { url: config.databaseUrl, dialect: 'postgres' };

module.exports = sequelizeConfig;
