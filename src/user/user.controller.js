const mongoose = require ("mongoose");
var User = require('./user.model');
var bcrypt = require ("bcrypt");
var jwt = require ("jsonwebtoken");
var config = require('../config/config')

exports.getUser = async (req,res) =>{
    try{
        let user= await User.findById({_id: req.params.id});
        if (user) {
            return res.status(202).json(user);
        } else {
            return res.status(400).json({message:"an error has occured."});
        }
    } catch(error) {
        return res.status(400).send({message:"user not found"});
    }
};

exports.getUsers = async (req,res) => {
    try {
        let users = User.find({})
        if (users) {
            return res.status(202).json({message: 'user found'})
        } else {
            return res.status(404).json({message: "user not found"})
        }

    } catch (error) {
        return res.status(400).send({message: "user not found"})
    }
}


exports.createUser = async (req,res) => {
    try{
        var user =  req.body;
        const newUser = await User.create(user);
        newUser.password = undefined;

        if(newUser) {
            return res.status(201).send({message: "user created", data:newUser});
        } else {
            return res.status(400).send(error.message);
        }
    } catch (error) {
        return res.status(400).send(error.message);
    }
};

exports.updateUser = async (req,res) => {
    try{
        const userId = req.params.id;
        const user = req.body;
        const userUpdated = await User.findByIdAndUpdate(mongoose.Types.ObjectId(userId), {$set: user}, {new:true}); 
        if(userUpdated) {
            return res.status(202).send({message:"updated"})
        } else {
            return res.status(400).send({message: 'An error has occured.' })
        }
    } catch(error) {
        return res.status(400).send({message: error.message})
    }
};

exports.delete = async (req,res) =>{
    try{
        const userId = req.params.id;
        const userDeleted = await User.deleteOne({_id: userId});
        if (userDeleted.n > 0) {
            return res.status(200).send({message:"user deleted"})
        } else {
            return res.status(400).send({message: 'An error has occured.' })
        }
    } catch(error){
        return res.status(400).send({message: error.message})
    }
};

const accessToken = generateToken (user)
const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET)
res.json({accessToken : acessToken, refreshToken: refreshToken})

function generateToken (params = {}) { 
   return jwt.sign({params}, config.secret, {expiresIn: '15s'})
};

exports.loginUser = async (req,res) => {
    try {
        const email =  req.body.email;
        const password = req.body.password;
        const user = await User.findOne({email: email});
        if (!user) {
            return res.status(404).send({message:"user not found"});
        }
        if (!await bcrypt.compare(password, user.password)) {
            return res.status(400).send({message:"invalid password"});
        }
        user.password = "";
        return res.send({message: "login sucessful", data: user, token: generateToken({id: user._Id})})
    } catch (error) {
        return res.status(400).send({message: error.message})
        
    }
}

exports.logoutUser = async (req,res) => {
    try {
        const {refreshToken} = req.body
        if (!refreshToken) {
            return res.status(400).send({message: "An error has occured"})
            const userId = await verifyRefreshToken(refreshToken)
            User.deleteOne(userId)
        }
        
    } catch (error) {
        return res.status(400).send({message: error.message})
    }

}