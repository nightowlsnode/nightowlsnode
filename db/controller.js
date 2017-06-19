const User = require('./models/users');
const Item = require('./models/items');
const querystring = require('querystring');

exports.search = function (req, res) {
  const query = req.query.item;
  Item.findAll({ where: { title: { $iLike: `%${query}%` } },
    include: [{ model: User, as: 'owner', attributes:['id', 'name', 'rating'] }] })
    .then(items => {
      const itemPayload = { items };
      res.json(itemPayload);
    })
    .catch(err => res.status(500).send("Error seaching our database", err));
};
