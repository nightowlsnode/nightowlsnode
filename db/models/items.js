const Sequelize = require('sequelize');
const db = require('./db');
const User = require('./users');

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

Item.belongsTo(User, { as: 'borrower', foreignKey: 'borrower_id' });
Item.belongsTo(User, { as: 'owner', foreignKey: 'owner_id' });

module.exports = Item;
