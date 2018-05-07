
var express = require('express');
var passport      = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var router = express.Router();

var modelos = require('../models');


//LOCAL STRATEGY
const strategy = new LocalStrategy({
  usernameField : 'correo',
  passwordField : 'password'
 }, function(correo, password, done){

});

passport.use(strategy);



/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
