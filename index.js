const express = require('express');
const path = require('path');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const passport = require('passport');
const session = require('express-session');
const controller = require('./server/controller.js');
const db = require('./db/models/db.js');
const Session = require('./db/models/session.js');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const setUserId = (req, res, next) => {
  console.log('sess', req.session);
  console.log('sessID', req.sessionID);
  if (req.session && !req.session.userID && req.sessionID) {
    console.log('!req.session && !req.session.userID');
    next();
  } else {
    next();
  }
  req.session ? console.log(req.session.user) : console.log('noSess');
};

const port = process.env.PORT || 1337;
const app = express();
module.exports = app;

require('./server/passport')(passport);


app.use(setUserId, session({
  secret: 'keyboard cat',
  store: new SequelizeStore({
    db,
    table: 'Session',
  }),
  saveUninitialized: false,
  resave: false,
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(controller.publicRoutes, express.static(path.join(__dirname, '/public')));
require('./server/routes.js')(app, passport);

app.listen(port);

console.log(`Neighborly running on: ${port}`);
