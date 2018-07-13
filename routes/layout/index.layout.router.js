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
  res.render('index');
});

module.exports = router;