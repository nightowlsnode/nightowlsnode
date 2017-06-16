var app = require('../index.js')
//make a git route that tries to send emails

//set up an express handler/router to localhost:3000/item
//on the item.html will be  a click handler that asks our server to update the db and 
//send an email to the item owner
// -- find an email and configure email api
// -- create server route (POST /borrow) that performs logic (on item and borrower data received)
// ----define how data should be received
// --send email to owner with borrower info and item info
// -- update db to reflect borrow status

app.post('/borrow', 
function(req, res) {
	console.log('req.body is ', req.body.itemID)
	var itemID = req.body.itemID
	res.status(201).send(JSON.stringify(itemID))
})


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