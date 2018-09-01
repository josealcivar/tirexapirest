/*

@Descripcion: Ventanas del login
@Autor: jose Alcivar
@FechaCreacion: 12/07/2018
@UltimaFechaModificacion: 12/07/2018 @JoseAlcivar (se lo puso bonito)


*/

'use strict';
var express = require('express');
var router = express.Router();

// redirige a la pagina inicial si ha sido loggeado
router.get('/index',isLoggedIn, function(req, res, next) {
  res.render('index');
});


// redirige a la pagina inicial si ha sido loggeado
router.get('/clientes', function(req, res, next) {
  res.render('clientes', {title: "hola mundo"});
});


function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();

    res.redirect('login/');
  }


module.exports = router;
