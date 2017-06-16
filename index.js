const express = require('express');
// const authenticationMiddleware = require('./server/authentication.js');
const path = require('path')
const bodyParser = require('body-parser');

const app = express();
module.exports = app;

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());

app.post('/items', function(req, res) {
	console.log(typeof req.body)
	console.log('request is : '+ JSON.stringify(req.body));
	// console.log('reqeust body is: ' + req.body);
	// res.json({"stuph": "some text"});
	res.send(req.body)
})

// all middleware must be above this line
const routes = require('./server/routes.js')



app.listen(process.env.PORT || 3000)

console.log('Neighborly running on :3000');
