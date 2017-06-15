const express = require('express');
const authenticationMiddleware = require('./server/authentication.js');
const path = require('path')
const bodyParser = require('body-parser');
const routes = require('./server/routes.js')



const app = express();

app.use(express.static(__dirname + '/public'));
app.use(bodyParser());

app.listen(process.env.PORT || 3000)

console.log('Neighborly running on :3000');