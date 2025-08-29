const path = require('path');
const express = require('express');
const rootDir = require('../utils/pathUtils')

const libraryRouter = express.Router();

libraryRouter.get('/library',(req,res,next) => {
  console.log('Library Page get',req.url,req.method);
  res.sendFile(path.join(rootDir,'view','library.html'))
})

module.exports = libraryRouter;