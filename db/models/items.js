const Sequelize = require('sequelize');
const User = require('./users');
const db = require('./db');

const Item = db.define('Item', {
  title: {
    type: Sequelize.STRING,
  },
  image: {
    type: Sequelize.STRING,
  },
  itemDescription: {
    type: Sequelize.TEXT,
  },
});

module.exports = Item;
