const mongoose = require ("mongoose")
const Schema = mongoose.Schema;

const workerSchema = new Schema ({
    fristName:{
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
});

let Worker = mongoose.model("Worker", workerSchema)
module.exports = User;