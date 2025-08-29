const path = require('path');
const express = require('express');
const rootDir = require('../utils/pathUtils');

const loginRoute = express.Router();

loginRoute.get('/login', (req, res, next) => {
  console.log('Login page get', req.url, req.method);
  res.sendFile(path.join(rootDir, 'view', 'login.html'));
});

loginRoute.post('/', (req, res, next) => {
  console.log('Login page post', req.url, req.method);

  console.log(req.body);  // now it will show form data

  res.sendFile(path.join(rootDir, 'view', 'index.html'));
});

module.exports = loginRoute;