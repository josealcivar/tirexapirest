/*
@Descripcion: Api del procariano
@Autor: jose viteri
@FechaCreacion: 25/05/2017
@UltimaFechaModificacion: 05/06/2017 @EdisonMora (se lo puso bonito)
*/


/* jshint node: true */
'use strict';

var controlador = require('../controllers/controller_clientes');
var vendedor = require('../controllers/vendedor_controller');
var models = require('../models').Vendedor;
var express = require('express');
var router = express.Router();

//API

/* GET home page. */
router.get('/clientes/:id', controlador.ObtenerClientes);
router.get('/', vendedor.ObtenercorreoVend);
module.exports = router;
