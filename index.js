const express = require('express');
// const authenticationMiddleware = require('./server/authentication.js');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
module.exports = app;

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.post('/items', (req, res) => {
  res.send(req.body);
});

// all middleware must be above this line
const routes = require('./server/routes.js');


app.listen(process.env.PORT || 3000);

console.log('Neighborly running on :3000');
