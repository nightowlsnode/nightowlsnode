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
  app.post('/borrow', controller.borrow);

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

  app.post('/api/items', (req, res) => {
    console.log('request is', req);
    res.send(req.body);
  });
};
