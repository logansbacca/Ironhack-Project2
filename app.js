var express = require('express');
var app = express();
var database = require("./src/config/db")
// hbs setup
database.on("connected", () =>  {
  console.log("db connected")
}) 

database.on("disconnected", () =>  {
  console.log("db disconnected")
}) 

database.on("error", (error) =>  {
  console.log("error" + error)
}) 
//app.set('hbs');

// Set partials for handlebars

//hbs.registerPartials(path.join(__dirname, 'views/partials'));
app.use(express.json());

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

app.listen('3000', function(){
  console.log('Server running on port 3000!')
})

module.exports = app;
