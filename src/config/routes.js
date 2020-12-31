//ROUTES
var userRouter = require('../user/user.router');
var workerRouter = require('../workers/workers.router');

module.exports = (app) => {

    app.get( '/user/login', async ( req, res ) => {
        res.render( 'login' );  
    } );

    app.get( '/user/registration', async ( req, res ) => {
        res.render( 'register' );  
    } );
    
    
    app.get( '/hirenow', async ( req, res ) => {
        res.render('hirenow')
    } );

    app.use('/api/user', userRouter); 
    app.use('/api/workers', workerRouter); 

    app.get("/api", (req,res) => {
        res.send("welcome to our api")
    });



    
    

}



