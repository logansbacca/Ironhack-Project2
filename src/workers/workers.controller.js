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

exports.createWorker = async (req,res) => {
    try{
        var worker =  req.body;
        const newWorker = await Worker.create(worker);
        newWorker.password = undefined;

        if(newWorker) {
            return res.status(201).send({message: "freelance profile created", data:newWorker});
        } else {
            return res.status(400).send(error.message);
        }
    } catch (error) {
        return res.status(400).send(error.message);
    }
};

exports.deleteWorker = async (req,res) => {
    try{
        const workerId = req.params.id;
        const workerDeleted = await Worker.deleteOne({_id: workerId});
        if (workerDeleted.n > 0) {
            return res.status(200).send({message:"user deleted"})
        } else {
            return res.status(400).send({message: 'An error has occured.' })
        }
    } catch(error){
        return res.status(400).send({message: error.message})
    }
};

exports.updateWorker = async (req,res) => {
    try{
        const workerId = req.params.id;
        const worker = req.body;
        const workerUpdated = await Worker.findByIdAndUpdate(mongoose.Types.ObjectId(workerId), {$set: worker}, {new:true}); 
        if(workerUpdated) {
            return res.status(202).send({message:"updated"})
        } else {
            return res.status(400).send({message: 'An error has occured.' })
        }
    } catch(error) {
        return res.status(400).send({message: error.message})
    }
};