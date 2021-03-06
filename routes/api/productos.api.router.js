/*
@Descripcion: Api del productos
@Autor: jose viteri
@FechaCreacion: 25/05/2017
*/


/* jshint node: true */
'use strict';

var controlador = require('../../controllers/productos_controller');
var express = require('express');
var router = express.Router();

//API

/* GET home page. */
router.get('/destacados/', controlador.ProductosDestacados);
//router.get('/', controlador.ProductosDestacados);
/*GET productos de busqueda*/
router.get('/busqueda/:searchItem', controlador.ProductosConsultadosParametros);



module.exports = router;
