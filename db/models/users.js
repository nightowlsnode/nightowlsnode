const Sequelize = require('sequelize');
const db = require('./db');

let User = db.define ('User', {
  fbId : {
    type: Sequelize.STRING
  },
  image: {
    type: Sequelize.STRING
  },
  name: {
    type: Sequelize.STRING, allowNull: false
  },
  email: {
    type: Sequelize.STRING,
  },
  street: {
    type: Sequelize.STRING
  },
  city: {
    type: Sequelize.STRING
  },
  state: {
    type:Sequelize.STRING
  },
  zip: {
    type: Sequelize.INTEGER
  },
  bio: {
    type: Sequelize.TEXT
  },
  rating: {
    type: Sequelize.FLOAT
  },
  ratingCount: {
    type: Sequelize.INTEGER
  }
});

module.exports = User;


