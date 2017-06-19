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
      console.log('req.body is ', req.body.itemID);
      const itemID = req.body.itemID;
      res.status(201).send(JSON.stringify(itemID));
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


const app = require('../index.js');
// const http = require('http');
const Mailgun = require('mailgun-js');
// eventually move this to private
// let api_key =  'pubkey-5076220e7b981c32e14338a01a97dda9'  //'MAILGUN-API-KEY';
const apiKey = 'key-ec6e393db6a801f3905c7c9ff8318c39';
const domain = 'sandbox3e58bab15a48474c8df12896c4b8a88d.mailgun.org'; // 'YOUR-DOMAIN.com';
const fromWho = 'Ochmaowicz@gmail.com';// 'your@email.com';

app.post('/borrow',
  (req, res) => {
    const itemID = JSON.stringify(req.body.itemID);
    const borrower = JSON.stringify(req.body.borrowerID);


    res.status(201).send(`${itemID} , ${borrower}`);
  });

app.get('/submit', (req, res) => {
  // //We pass the api_key and domain to the wrapper, or it won't be able to identify + send emails
  const mailgun = new Mailgun({ apiKey, domain });

  const data = {
    from: fromWho,
    to: fromWho, // req.params.mail,
    subject: 'Hello from Mailgun',
    text: 'gsdgdssdljsd',
  };

  mailgun.messages().send(data, (err, body) => {
    if (err) {
      console.log('got an error: ', err);
    } else {
      console.log('body is ', body);
    }
  });
  res.send('bye');
});

