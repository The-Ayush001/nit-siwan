const path = require('path');

const express = require('express');

const rootDir = require('../utils/pathUtils')

const loginRoute = express.Router();

loginRoute.get('/login',(req,res,next) =>{
  console.log('Login page get',req.url,res.method);
  res.sendFile(path.join(rootDir,'view','login.html'))
})

// for css style (path of css file)
// loginRoute.use(express.static(path.join(rootDir,'public')))


module.exports = loginRoute;