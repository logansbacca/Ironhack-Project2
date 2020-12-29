document.addEventListener( 'submit', ( e ) => {
    e.preventDefault();
 
    fetch( '/api/user/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify( {
            email: document.querySelector( 'input[name="email"]' ).value,
            password: document.querySelector( 'input[name="password"]' ).value
        } )        
    } ).then( async res => {
        var data = await res.json();
        
       console.log('User logged!');
    } );
} );