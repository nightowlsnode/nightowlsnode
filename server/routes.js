const request = require('request');
const private = require('../private/apiKeys.js');

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

  app.post('/borrow',
    (req, res) => {
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
    });


  app.get('/profile', isLoggedIn, (req, res) => {
    res.render('profile.ejs', {
      user: req.user, // get the user out of session and pass to template
    });
  });


  app.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });


  // app.post('/login', do all our passport stuff here);
  app.post('/signup', passport.authenticate('local-signup'), (req, res) => res.redirect('/profile'));

// let uri = req.body.url;

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


// const app = require('../index.js');
// // const http = require('http');
// const Mailgun = require('mailgun-js');
// // eventually move this to private
// const apiKey = 'MAILGUN-API-KEY';
// const domain = YOUR-DOMAIN.com';
// const fromWho = your@email.com';
