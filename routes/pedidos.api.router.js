/*
@Descripcion: Api del Pedidos
@Autor: jose Alcivar
@FechaCreacion: 08/05/2019
*/


/* jshint node: true */
'use strict';

var controlador = require('../controllers/productos_controller');
var express = require('express');
var router = express.Router();

//API

/* GET home page. */
router.get('/destacados/', controlador.ProductosDestacados);
//router.get('/', controlador.ProductosDestacados);
/*GET productos de busqueda*/
router.get('/busqueda/:searchItem', controlador.ProductosConsultados);


/*
  @descripcion: Ingreso de Pedidos al sistema.
  

*/
router.post('/', controlador.ProductosConsultados);

module.exports = router;
