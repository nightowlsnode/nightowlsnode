const Item = require('../db/models/items.js');
const User = require('../db/models/users.js');
const passport = require('passport');
const request = require('request');
const private = require('../private/apiKeys.js');

exports.publicRoutes = [
  '/',
  '/profile/',
  '/profile/:id',
  '/login',
  '/signup',
];
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
exports.getUserItems = (req, res) => {
  Item.findAll({
    where: {
      owner_id: req.params.userId,
    },
    include: [ {model: User, as: 'borrower', attributes: ['fullName']}],
  }) 
    .then((items) => {
      if (!items) {
        res.status(400).send('Could not find User Items');
      } else {
        res.status(200).send(items);
      }
      return 'getUserItems promise resolved';
    });
};
exports.getBorrowedItems = (req, res) => {
  Item.findAll({
    where: {
      borrower_id: req.params.userId,
    },
    include: [{ model: User, as: 'owner', attributes: ['fullName'] }],
  })
    .then((items) => {
      if (!items) {
        res.status(400).send('Could not find Borrowed Items');
      } else {
        res.status(200).send(items);
      }
      return 'getBorrowedItems promise resolved';
    });
};
exports.borrow = (req, res) => {
  const itemName = req.body.itemName;
  const userID = req.body.userID;
  const userNumber = req.body.userNumber;
  const header = {
    Authorization: private.authorizationCode,
    'Content-Type': 'application/x-www-form-urlencoded',
  };

  const options = {
    url: `https://www.@api.twilio.com/2010-04-01/Accounts/${private.sid}/Messages`,
    method: 'POST',
    headers: header,
    form: { To: private.myNumber, From: private.twilioNumber, Body: `${userID} would like to borrow your ${itemName}. You can contact them at ${userNumber}.` },
  };
  request(options, (error, response, body) => {
    if (!error){ //statuscode is not definded 
      console.log(options);
    }
  });
  res.status(201).send('ok!');
};
exports.search = (req, res) => {
  const query = req.query.item;
  Item.findAll({ where: { title: { $iLike: `%${query}%` } },
    include: [{ model: User, as: 'owner', attributes: ['firstName', 'rating', 'location'] }] })
    .then((items) => {
      const itemPayload = { items };
      res.json(itemPayload);
    })
    .catch(err => res.status(500).send('Error seaching our database', err));
};
exports.handleLogin = (req, res, next) => {
  passport.authenticate('local-login', (err, user) => {
    if (err) {
      return next(err); // will generate a 500 error
    }
    // Generate a JSON response reflecting authentication status
    if (!user) {
      return res.status(400).send({ success: false, message: 'authentication failed' });
    }
    return req.login(user, (loginErr) => {
      if (loginErr) {
        return next(loginErr);
      }
      return res.send({ success: true, message: 'authentication succeeded', profile: user });
    });
  })(req, res, next);
};
exports.handleSignup = (req, res, next) => {
  passport.authenticate('local-signup', (err, user) => {
    if (err) {
      return next(err); // will generate a 500 error
    }
    // Generate a JSON response reflecting authentication status
    if (!user) {
      return res.send({ success: false, message: 'authentication failed' });
    }
    return req.login(user, (loginErr) => {
      if (loginErr) {
        return next(loginErr);
      }
      return res.send({ success: true, message: 'authentication succeeded', profile: user });
    });
  })(req, res, next);
};
