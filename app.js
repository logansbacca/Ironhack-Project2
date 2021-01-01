const express = require('express');
const app = express();
var database = require("./src/config/db")
const User = require("./src/user/user.model")
const bodyParser = require('body-parser');
const path = require("path")

app.use(bodyParser.json());

//view enginer setup
app.set( 'views', path.join( __dirname, 'src/views' ) );
app.set( 'view engine', 'hbs' );

database.on("connected", function () {
  console.log("connected!");
});

database.on("disconnected", function () {
  console.log("disconnected!");
});

database.on("error", function (error) {
  console.log('Connection error: ' + error);
});

require("./src/config/routes")(app)


app.listen('3000', function(){
  console.log('Server running on port 3000!')
})

