const Item = require('../db/models/items.js');
const User = require('../db/models/users.js');


exports.getProfile = (req, res) => {
  User.findById(req.params.id)
    .then((profile) => {
      if (!profile) {
        res.status(400).send('Could not find user profile');
      } else {
        res.status(200).send(profile);
      }
      return 'getProfile promise resolved';
    });
};

exports.search = (req, res) => {
  const query = req.query.item;
  Item.findAll({ where: { title: { $iLike: `%${query}%` } },
    include: [{ model: User, as: 'owner', attributes: ['firstName', 'rating'] }] })
    .then((items) => {
      const itemPayload = { items };
      res.json(itemPayload);
    })
    .catch(err => res.status(500).send('Error seaching our database', err));
};
