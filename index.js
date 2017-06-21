const express = require('express');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const controller = require('./server/controller.js');

const port = process.env.PORT || 3000;
const app = express();
module.exports = app;

require('./server/passport')(passport);

app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(session({ secret: 'mrButton' }));
app.use(passport.initialize());
app.use(passport.session());

app.use(controller.publicRoutes, express.static(path.join(__dirname, '/public')));
require('./server/routes.js')(app, passport);

app.listen(port);

console.log(`Neighborly running on: ${port}`);
