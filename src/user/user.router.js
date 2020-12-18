const express = require ("express");
const { model } = require("./user.model");

var router = express.Router();

router.post("/create",(req,res) =>{
    res.send("user created")
});

module.exports = router; 