const express = require('express');
const app = express();
const bodyParser = require('body-parser'); // not required in latest express but works

app.use(bodyParser.urlencoded()); // to parse form data

const homeRoute = require('./router/Home');
const libraryRouter = require('./router/Library');
const loginRoute = require('./router/login');
const adminisRoute = require('./router/administration');
const CSERouter = require('./router/CSE');

app.use(homeRoute);
app.get("/test", (req, res)=>{
  res.send("Express is working!")
})
app.use(libraryRouter);
app.use(loginRoute);
app.use(adminisRoute);
app.use(CSERouter);

const PORT = 3000;
app.listen(PORT,()=>{
  console.log(`Server is started on address http://localhost:${PORT}`)
})


module.exports = app;