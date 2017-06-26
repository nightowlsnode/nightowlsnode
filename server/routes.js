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

module.exports = (app) => {
  // PROFILE ROUTES
  app.use('/profile/:id', express.static(path.join(__dirname, '../public')));
  app.use('/profile/', express.static(path.join(__dirname, '../public')));

  // RESULTS ROUTES
  app.get('/search', controller.search);

  // AUTH ROUTES
  app.use('/login', express.static(path.join(__dirname, '/public')));
  app.use('/signup', express.static(path.join(__dirname, '/public')));
  app.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });
  app.post('/login', controller.handleLogin);
  app.post('/signup', controller.handleSignup);

  // API ROUTES
  app.get('/api/profile/:id', controller.getProfile);
  app.get('/api/userItems/:userId', controller.getUserItems);
  app.get('/api/borrowedItems/:userId', controller.getBorrowedItems);
  app.post('/api/items', controller.addItems);
  app.put('/api/items/:id', controller.returnItem);
  app.post('/api/updateUser', controller.updateUser);
  app.post('/api/borrow', controller.borrow);
};


// const app = require('../index.js');
// // const http = require('http');
// const Mailgun = require('mailgun-js');
// // eventually move this to private
// const apiKey = 'MAILGUN-API-KEY';
// const domain = YOUR-DOMAIN.com';
// const fromWho = your@email.com';
