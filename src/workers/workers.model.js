const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const WorkerSchema = new Schema ({
    firstName:{
        type: String,
        required: [true, 'your name is required'],
    },
    lastName: {
        type: String,
        required: [true, 'your surname is required'],
    },
    email:{
        type: String,
        required: [true, 'the email is required'],
    },
    profession: {
        type: String,
        required:[true, 'profession required'],
    },
    user: {
        ref: 'User',
        type: mongoose.Schema.Types.ObjectId
    }
});

let Worker = mongoose.model("Worker", WorkerSchema)
module.exports = Worker;
 
