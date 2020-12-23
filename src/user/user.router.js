const express = require ("express");
const { model } = require("./user.model");

var router = express.Router();
const userController = require ('./user.controller');

//router.get('/', userController.getUsers);
router.get('/:id', userController.getUser);
router.post('/', userController.createUser);
router.put('/:id', userController.updateUser);
//router.delete('/:id', userController.deleteUser);
router.post('/login',userController.loginUser);
//router.post('/login, userController.login');

router.post("/create",(req,res) =>{
    res.send("user created")
});

module.exports = router; 