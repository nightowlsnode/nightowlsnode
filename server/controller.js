const Item = require('../db/models/items.js');
const User = require('../db/models/users.js');


exports.getProfile = (req, res) => {
  console.log('id is ', req.params)
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
