const mongoose = require ("mongoose")
const Schema = mongoose.Schema;

const UserSchema = new Schema ({
    userName: {
        type: String,
        required:[true, 'The username is required!'],
    },
    password:{
        type: String,
        required:[true ,'The password is required'],
    },
    email: {
        type: String,
        required: true,
        unique: [true, "The email is required"],
    },
});

let User = mongoose.model("User", UserSchema);

module.exports = User;
