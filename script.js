const express = require('express');
const app = express();

app.use(function(req,res,next){  //middleware function
  console.log('middleware chala');
  next();
})

app.get("/",function(req, res) {
  res.send("Hello, World!");
});                                //routers

app.get("/profile",function(req, res) {
  res.send("Hello, Profile!");
});


//error handling middleware

app.listen(3000);