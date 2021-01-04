const mongoose = require ("mongoose")
mongoose.connect(
    "mongodb+srv://loganbacca:12345@project2.1jjte.mongodb.net/project2>?retryWrites=true&w=majority",
    {
        useNewUrlParser:true
    }
    )
    .then (() => {
        console.log ("mongodb connected")

});

