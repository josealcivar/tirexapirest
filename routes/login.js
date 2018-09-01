const express = require('express');
const passport = require('passport');
var router = express.Router();





router.post('/register', passport.authenticate('local-signup', {

    successRedirect: '/',
    failureRedirect: '/register'
    // failureFlash: true

  }));



// router.post('/register', function(req,res, next){
// console.log("esto es del servidor");
//   res.json("hola carnal");
// });

router.post('/login', passport.authenticate('local-signin', {
      successRedirect: 'index/',
      failureRedirect: '/register'
      // failureFlash: true
    }));



module.exports = router;
