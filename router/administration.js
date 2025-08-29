const path = require('path')
const express = require('express');
const rootDir = require('../utils/pathUtils')

const adminisRoute = express.Router()

adminisRoute.get('/administration',(req,res,next)=>{
  console.log('Administration page get',req.url,req.method);
  res.sendFile(path.join(rootDir,'view','administration.html'))
})

module.exports = adminisRoute;