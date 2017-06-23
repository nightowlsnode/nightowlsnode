const Sequelize = require('sequelize');
const db = require('./db');
const Item = require('./items');
const bcrypt = require('bcrypt-nodejs');
const { googleMapsPromise } = require('../../server/geoUtilities.js');

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
  firstName: {
    type: Sequelize.STRING, allowNull: false,
  },
  lastName: {
    type: Sequelize.STRING, allowNull: false,
  },
  fullName: {
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
  location: {
    type: Sequelize.ARRAY(Sequelize.FLOAT),
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
User.beforeCreate((user) => {
  const address = `${user.street} ${user.city} ${user.state} ${user.zip}`;
  return googleMapsPromise(address).then(({ lat, lng }) => {
    user.location = [lat, lng];
  });
});

User.hasMany(Item, { foreignKey: 'borrower_id' });
User.hasMany(Item, { foreignKey: 'owner_id' });
Item.belongsTo(User, { as: 'borrower', foreignKey: 'borrower_id' });
Item.belongsTo(User, { as: 'owner', foreignKey: 'owner_id' });

module.exports = User;
