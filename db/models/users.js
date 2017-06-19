const Sequelize = require('sequelize');
const db = require('./db');
const bcrypt = require('bcrypt-nodejs');

const User = db.define('User', {
  fbId: {
    type: Sequelize.STRING,
  },
  fbToken: {
    type: Sequelize.STRING,
  },
  image: {
    type: Sequelize.STRING,
  },
  name: {
    type: Sequelize.STRING, allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
  },
  password: {
    type: Sequelize.STRING,
  },
  street: {
    type: Sequelize.STRING,
  },
  city: {
    type: Sequelize.STRING,
  },
  state: {
    type: Sequelize.STRING,
  },
  zip: {
    type: Sequelize.INTEGER,
  },
  bio: {
    type: Sequelize.TEXT,
  },
  rating: {
    type: Sequelize.FLOAT,
  },
  ratingCount: {
    type: Sequelize.INTEGER,
  },
});
User.generateHash = password => bcrypt.hashSync(
  password,
  bcrypt.genSaltSync(8),
  null);
User.validPassword = password => bcrypt.compareSync(
  password,
  this.password);


module.exports = User;
