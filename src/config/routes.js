//ROUTES
var userRouter = require('../user/user.router');


module.exports = (app) => {

    app.use('/api/user', userRouter); 
    

    app.get("/api", (req,res) => {
        res.send("welcome to our api")
    });

    app.get( '/user/login', async ( req, res ) => {
        res.render( 'login' );  
    } );

    
    

}



