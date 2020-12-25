//ROUTES
var userRouter = require('../user/user.router');
//var workersRouter = require ('../workers/workers.router');

module.exports = (app) => {

    app.use('/api/user', userRouter); 
    //app.use('/api/workers',workersRouter)
    app.get("/api", (req,res) => {
        res.send("welcome to our api")
    });

}


