/*
@Descripcion: Api de vendedores
@Autor: jose alcivar
@FechaCreacion: 15/09/2018
@UltimaFechaModificacion: 15/09/2018 
*/


/* jshint node: true */
'use strict';

var controlador = require('../../controllers/vendedor_controller');


var express = require('express');
var router = express.Router();

//API

/* GET home page. */
//router.get('/all/:vend_id', controlador.GetClientSeller);

/*
@Descripcion: se obtiene un solo cliente
*/

//router.get('/:id', controlador.cliente_x_id);

/*
@Descripcion: se obtiene un solo cliente
*/

router.post('/create/', controlador.BuscarVendedor);

module.exports = router;
