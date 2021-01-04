const express = require('express');
const app = express();
var database = require("./src/config/db")
const User = require("./src/user/user.model")
const bodyParser = require('body-parser');
const path = require("path")
var config = require('./src/config/config')

app.use(bodyParser.json());

//view enginer setup
app.set( 'views', path.join( __dirname, 'src/views' ) );
app.set( 'view engine', 'hbs' );



require("./src/config/routes")(app)



