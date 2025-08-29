const path = require('path')
const express = require('express')
const rootDir = require('../utils/pathUtils')

const CSERouter = express.Router()

CSERouter.get('/CSE',(req,res,next)=>{
  console.log('CSE page get',req.url,req.method);
  res.sendFile(path.join(rootDir,'view','CSE.html'))
})

module.exports = CSERouter;