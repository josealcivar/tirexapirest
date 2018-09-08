const express = require('express');
const jwt = require('jsonwebtoken');
 

const app = express();

app.get('/api',(req, res) => {res.json({ message: "Welcome to the API" }); });


app.post('/api/posts', verifyToken, (req, res)=>{

jwt.verify(req.token, 'secretkey', (err, authData) => {

    if(err){
        res.sendStatus(403);
    }else{
        res.json({
            message: 'post craated!!!',
            authData 
        });
    }
});
});


app.post('/api/login', (req, res) => {
    /// JOSE USER
    const user = {
        id:1,
        username:'brad',
        email:'mail@mail.com'
    }
    jwt.sign({user}, 'secretkey', { expiresIn: '100s' }, (err, token) =>{
        
        res.json({
            token
        });
        console.log(token);
    });
});

//FORMAt OF TOKEN
//AUTHORIZATION: Bearer <access_token>

function verifyToken(req, res, next){
    //Get auth header values
    const bearerHeader = req.headers['x-access-token'];
    // const bearerHeader = req.headers['authorization'];
    //check if bearer is underfined
    if(typeof bearerHeader!== 'undefined'){
        // split at space
        console.log("PRIMERO ESTE")
        console.log(bearerHeader);
        // const bearer = bearerHeader.split(' ');
        console.log("SEGUNDO ESTE")
        // console.log(bearer);
        //Get token from array 
        // const bearerToken = bearer[0];
        // set the token
        console.log("Por ultimo este de aqui")
        // console.log(bearerToken);
        req.token = bearerHeader;
        //Next moddleeare
        next();
    }else{
        res.sendStatus(403);
    }

}

app.listen(5000, () => console.log('server start!!!'));