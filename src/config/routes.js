//ROUTES
var userRouter = require('../user/user.router');
var workerRouter = require('../workers/workers.router');
var Worker = require('../workers/workers.model');
var User = require ('../user/user.model');

module.exports = (app) => {

    app.get( '/user/login', async ( req, res ) => {
        res.render( 'login' );  
    } );

    app.get( '/user/registration', async ( req, res ) => {
        res.render( 'register' );  
    } );
    
    
    app.get( '/hirenow', async ( req, res ) => {

        try{
            const workers = await Worker.find();
            res.render("hirenow", {workers})
          }catch(e){
            console.error(e)
        }     
    });

    app.get('/user/profile/:id', async (req, res) => {
        try{
            const user = await User.findById({_id: req.params.id});
            res.render("user", {user})
          }catch(e){
            console.error(e)

        }
    });

    app.use('/api/user', userRouter); 
    app.use('/api/workers', workerRouter); 

    app.get("/api", (req,res) => {
        res.send("welcome to our api")
    });



}



