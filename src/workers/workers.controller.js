const mongoose = require ("mongoose");
var Worker = require('./workers.model');

exports.getWorker = async (req,res) => {
    try {
        let workerId = req.params.id
        let worker = await Worker.findById({_id : workerId})
        if(worker) {
            return res.status(202).json(worker)
        } else {
            return res.status(404).json({message:'user not found'})
        }
        
    } catch (error) {
        return res.status(400).send({message: "user not found"})
        
    }
} 

exports.getWorkers = async (req,res) => {
    try {
        let workers = Worker.find({})
        if (workers) {
            return res.status(202).json({message: 'user found'})
        } else {
            return res.status(404).json({message: "user not found"})
        }

    } catch (error) {
        return res.status(400).send({message: "user not found"})
    }
}

// create update,create,delete
