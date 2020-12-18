const express = require('express');
const app = express();
var database = require("./src/config/db")
const User = require("./src/user/user.model")
const bodyParser = require('body-parser');

app.use(bodyParser.json()); //


require("./src/config/routes")(app)
app.listen('3000', function(){
  console.log('Server running on port 3000!')
})



