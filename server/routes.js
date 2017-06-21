const express = require('express');
const path = require('path');
const controller = require('./controller.js');

const isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.redirect('/');
  }
};

module.exports = (app, passport) => {
// make a git route that tries to send emails

// set up an express handler/router to localhost:3000/item
// on the item.html will be  a click handler that asks our server to update the db and
// send an email to the item owner
// -- find an email and configure email api
// -- create server route (POST /borrow) that performs logic (on item and borrower data received)
// ----define how data should be received
// --send email to owner with borrower info and item info
// -- update db to reflect borrow status
  app.get('/search', controller.search);
  app.post('/borrow',
    (req, res) => {
      console.log('req.body is ', req.body.itemID);
      const itemID = req.body.itemID;
      res.status(201).send(JSON.stringify(itemID));
    });
  app.get('/api/profile/:id', controller.getProfile);
  app.use('/profile/:id', express.static(path.join(__dirname, '../public')));
  app.use('/profile/', express.static(path.join(__dirname, '../public')));

  app.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });
  // app.post('/login', do all our passport stuff here);
  app.post('/signup', passport.authenticate('local-signup'), (req, res) => res.send(req.body.name));

  app.get('/api/userItems/:userId', controller.getUserItems);
  app.get('/api/borrowedItems/:userId', controller.getBorrowedItems);

// var uri = req.body.url;

// if (!util.isValidUrl(uri)) {
//   console.log('Not a valid url: ', uri);
//   return res.sendStatus(404);
// }

//   new Link({ url: uri }).fetch().then(function(found) {
//     if (found) {
//       res.status(200).send(found.attributes);
//     } else {
//       util.getUrlTitle(uri, function(err, title) {
//         if (err) {
//           console.log('Error reading URL heading: ', err);
//           return res.sendStatus(404);
//         }

//         Links.create({
//           url: uri,
//           title: title,
//           baseUrl: req.headers.origin
//         })
//         .then(function(newLink) {
//           res.status(200).send(newLink);
//         });
//       });
//     }
//   });
// });
};
