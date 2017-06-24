const Item = require('../db/models/items.js');
const User = require('../db/models/users.js');
const passport = require('passport');
const request = require('request');
const { googleMapsPromise, addDistance } = require('./geoUtilities.js');
const secret = require('../private/apiKeys.js');
const Session = require('../db/models/session');
const private = require('../private/apiKeys.js');

//helper funcion for borrow
const sendMessage = function (item) {
  const itemName = item.title;
  const userID = item.borrower.fullName;
  const userNumber = item.borrower.phone;
  const header = {
    Authorization: secret.authorizationCode,
    'Content-Type': 'application/x-www-form-urlencoded',
  };

  const options = {
    url: `https://www.@api.twilio.com/2010-04-01/Accounts/${secret.sid}/Messages`,
    method: 'POST',
    headers: header,
    form: { To: secret.myNumber, From: secret.twilioNumber, Body: `${userID} would like to borrow your ${itemName}. You can contact them at ${userNumber}.` },
  };
  request(options, (error, response, body) => {
    if (error){ 
      throw error;
    }
  });
};
const setUserId = (req, res, next) => {
  console.log(req.sessionID);
  if (!req.session && !req.session.userID && req.sessionID) {
    Session.findOne({ where: { sid: req.sessionID } })
      .then((sessionSave) => {
        if (sessionSave.userID) {
          req.session.userID = sessionSave.userId;
        }
        next();
      });
  } else {
    next();
  }
  console.log(req.session.user);
};

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
exports.returnItem = (req, res) => {
  const itemId = req.params.id;
  Item.findById(itemId)
    .then(item =>  {
      if (item.borrower_id) {
        item.update({borrower_id:null});
      } else {
        throw new Error('Not currently borrowed');
      }
    })
    .then(() => res.status(202).send())
    .catch(() => res.status(304).send('error'));
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
exports.addItems = (req, res) => {
  Item.create({
    title: req.body.title,
    image: req.body.image,
    itemDescription: req.body.itemDescription,
    owner_id: req.body.user_id
  })
    .then(() => res.status(200).send())
    .catch((err) => {
      res.status(500).send('error adding new item')
      console.log(err);
    });
}

exports.borrow = (req, res) => {
  Item.update({
    borrower_id: req.body.userID
  }, {
    where: {
      id: req.body.id,
      borrower_id: null,
    },
  })
  .then((data) => {
    if (data[0] === 0) {
      throw new Error('already borrowed')
    } else {
       return Item.find({
         where: {
         id: req.body.id,
        },
       include: [ { model: User, as: 'borrower', attributes: ['fullName', 'phone']}, {model: User, as: 'owner', attributes: ['phone']}]
       });
    }})
  .then((item) => {sendMessage(item);})
  .then(() => res.status(201).send())
  .catch(()=> res.status(500).send('error borrowing item'));
};

exports.search = (req, res) => {
  const promiseQueue = [];
  const query = req.query.item;
  const itemSearchPromise = Item.findAll({ where: { title: { $iLike: `%${query}%` } },
    include: [{ model: User, as: 'owner', attributes: ['firstName', 'rating', 'location'] }] });
  promiseQueue.push(itemSearchPromise);
  const zip = req.query.zip;
  if (zip && zip.length === 5) {
    promiseQueue.push(googleMapsPromise (zip));
  }
  Promise.all(promiseQueue)
    .then(([ itemList, coords ]) => {
      if (coords) {
        itemList = itemList.map(item => addDistance(item, coords));
      }  
      const itemPayload = { items:itemList, location: (coords || null) };
      res.json(itemPayload)
    })
    .catch(err => {
      console.log(err);
      res.status(500).send();
    });
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
      req.session.userId = user.id;
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
      req.session.userId = user.id;
      return res.send({
        success: true,
        message: 'authentication succeeded',
        profile: user
      });
    });
  })(req, res, next);
};
exports.checkAuth = (req, res, next) => {
  console.log('authCheck');
  if (req.session.userId) {
    console.log('isAuthed');
    next();
  } else {
    console.log('notAuthed');
    res.redirect('/');
  }
};
exports.updateUser = (req, res) => {
  console.log(req.body);
  User.update({
    city: req.body.city,
    state: req.body.state,
    zip: req.body.zip,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    fullName: `${req.body.firstName} ${req.body.lastName}`,
    email: req.body.email,
    bio: req.body.bio,
  }, {where : {id: req.body.user_id} })
  .then(res.send('Updated User!'))
};
