/*
@Descripcion: Api del procariano
@Autor: jose viteri
@FechaCreacion: 25/05/2017
@UltimaFechaModificacion: 05/06/2017 @EdisonMora (se lo puso bonito)
*/


/* jshint node: true */
'use strict';

var controlador = require('../controllers/controller_clientes');
var express = require('express');
var router = express.Router();

//API

/* GET home page. */
router.get('/', controlador.ObtenerClientes);

module.exports = router;
