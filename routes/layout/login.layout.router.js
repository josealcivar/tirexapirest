/*

@Descripcion: Ventanas del login
@Autor: jose Alcivar
@FechaCreacion: 12/07/2018
@UltimaFechaModificacion: 12/07/2018 @JoseAlcivar (se lo puso bonito)


*/

'use strict';
var express = require('express');
var router = express.Router();

//Responde con la página de ingreso de benefactor
router.get('/', function(req, res, next) {
  res.render('login');
});

// =====================================
// REGISTER ==============================
// =====================================
router.get('/register', function(req, res, next) {
    res.render('signup');
});


// =====================================
// LOGOUT ==============================
// =====================================
router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

module.exports = router;
