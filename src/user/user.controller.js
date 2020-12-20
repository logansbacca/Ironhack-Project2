const mongoose = require ("mongoose");
var User = require('./user.model');

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
