const co = require('co');
const bcrypt = require('bcryptjs');
const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
var router = express.Router();

const Models_vendedor = require('../models').Vendedor;


//LOCAL STRATEGY
const strategy = new LocalStrategy({
  usernameField: 'usuario',
  passwordField: 'password'
}, function(usuario, password, done) {
  co(function*() {
    console.log("todo esta muy bien creo");
    console.log(usuario);
    console.log(password);
    console.log("aqui mostro");
  //    let user_password =  Models_vendedor.generateHash(password);
    //  console.log(password);
      //Primero se verifica si el correo existe en la base
    //  let vendedor = yield Models_vendedor.buscarUsuario(usuario);
  //    console.log(vendedor);
    //  if (!vendedor) {
      //  return done(null, false);
  //    } else {
        var data_vendedor =
                       {
                           email:    usuario,
                           password: user_password,
                           nombre:   req.body.nombre,
                           estado:   'activo'
                       };
                    Models_vendedor.crearVendedor(data_vendedor, (data_vendedor) => {

                    },(errorVendedor) => {
					               return res.status(400).json({
						             estado: false,
						             errorVendedor: errorVendedor
                       }); // end errorvendedor
                   }); // end modelo crear vendedor
              //   } //end if
  }).catch( err => {
    return done(err);
  }); // end co
}); //end LocalStrategy


//LOCAL STRATEGY
const strategy_login = new LocalStrategy({
  usernameField: 'usuario',
  passwordField: 'password'
}, function(usuario, password, done) {
  co(function*() {
    console.log("todo esta muy bien creo");
    console.log(usuario);
    console.log(password);
    console.log("aqui mostro");
  //    let user_password =  Models_vendedor.generateHash(password);
    //  console.log(password);
      //Primero se verifica si el correo existe en la base
    //  let vendedor = yield Models_vendedor.buscarUsuario(usuario);
  //    console.log(vendedor);
    //  if (!vendedor) {
      //  return done(null, false);
  //    } else {
        var data_vendedor =
                       {
                           email:    usuario,
                           password: user_password,
                           nombre:   req.body.nombre,
                           estado:   'activo'
                       };
                    Models_vendedor.crearVendedor(data_vendedor, (data_vendedor) => {

                    },(errorVendedor) => {
					               return res.status(400).json({
						             estado: false,
						             errorVendedor: errorVendedor
                       }); // end errorvendedor
                   }); // end modelo crear vendedor
              //   } //end if
  }).catch( err => {
    return done(err);
  }); // end co
}); //end LocalStrategy2

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  Models_vendedor.findById(id, function(err, user) {
    done(err, user);
  });
});

passport.use('local-login', strategy_login);
passport.use('local-signup', strategy);


router.post('/register', passport.authenticate('local-signup', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
  }));

router.post('/login', passport.authenticate('local-login', {
      successRedirect: '/',
      failureRedirect: '/register',
      failureFlash: true
    }));

router.get('/post', function(req,res){
  res.json('hola mundo');
});

router.get('/api/users/me',
  passport.authenticate('basic', {
    session: false
  }),
  function(req, res) {
    res.json({
      id: req.user.id,
      username: req.user.username
    });
  });


module.exports = router;
