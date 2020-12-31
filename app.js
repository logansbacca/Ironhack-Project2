const express = require('express');
const app = express();
var database = require("./src/config/db")
const User = require("./src/user/user.model")
const bodyParser = require('body-parser');
const path = require("path")

app.use(bodyParser.json());


// Set view engine is hbs
app.set( 'view engine', 'hbs' );
// By default, hbs templates are located in Views folder, we use Templates folder instead, that's why we need this line
app.set( 'views', path.join( __dirname, 'src/views' ) );
// Set location for statis resources
app.use( express.static( path.join( __dirname, 'assets' ) ) );


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

