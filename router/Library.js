const path = require('path');

const express = require('express');

const libraryRouter = express.Router();

const rootDir = require('../utils/pathUtils')

libraryRouter.get('/library',(req,res,next) => {
  console.log('Library Page get',req.url,req.method);
  res.sendFile(path.join(rootDir,'view','library.html'))
})

// for css style (path of css file)
// libraryRouter.use(express.static(path.join(rootDir,'public')))


module.exports = libraryRouter;