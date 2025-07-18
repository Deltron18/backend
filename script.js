const express = require('express');
const app = express();

app.use(express.json()); //middleware to parse JSON bodies
app.use(express.urlencoded({ extended: true })); //middleware to parse URL-encoded bodies

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