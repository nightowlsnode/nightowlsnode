const LocalStrategy = require('passport-local').Strategy;
const User = require('../db/models/users');

// expose this function to our app using module.exports
module.exports = (passport) => {
  console.log('-1');
  passport.serializeUser((user, done) => done(null, user.id));

  // used to deserialize the user
  console.log('0');
  passport.deserializeUser((id, done) => {
    User.findById(id).then((err, user) => {
      done(err, user);
    });
  });

  // =========================================================================
  // LOCAL SIGNUP ============================================================
  // =========================================================================
  // we are using named strategies since we have one for login and one for signup
  // by default, if there was no name, it would just be called 'local'

  passport.use('local-signup', new LocalStrategy({
    // by default, local strategy uses username and password, we will override with email
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true,
  },

  (req, eMail, password, done) => {
    console.log('3');
    // User.findOne wont fire unless data is sent back
    process.nextTick(() => {
    // find a user whose email is the same as the forms email
    // we are checking to see if the user trying to login already exists
      console.log('1');
      User.findOne({ where: { email: eMail } })
        .then((err, user) => {
          if (err) {
            console.log('DONE', done, 'REQQQQQQ', req.body, 'EMAIL???', eMail, 'PASSWORD', password);
            return done(err);
          }
          if (user) {
            console.log('user', done);
            return done(null, false, res.status(401).send('That email is already taken.'));
          }
          // if there is no user with that email
          // create the user
          User.create({
            name: req.body.name,
            email: eMail,
            password: User.generateHash(password),
          })
            .then((newUser) => {
              console.log('newUser', done);
              done(null, newUser);
            });
          return 'NextTick, findOne ran';
        });
    });
  }));
};
