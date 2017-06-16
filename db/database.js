const config = require('../private/dbconfig');

let sequelizeConfig = { url: config.databaseUrl, dialect: 'postgres' };

module.exports = sequelizeConfig;
