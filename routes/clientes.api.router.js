/*
@Descripcion: Api del procariano
@Autor: jose viteri
@FechaCreacion: 25/05/2017
@UltimaFechaModificacion: 05/06/2017 @EdisonMora (se lo puso bonito)
*/


/* jshint node: true */
'use strict';

var controlador = require('../controllers/controller_clientes');

var models = require('../models').Vendedor;
var express = require('express');
var router = express.Router();

//API

/* GET home page. */
router.get('/all/:vend_id', controlador.GetClientSeller);

/*
@Descripcion: se obtiene un solo cliente
*/

router.get('/:id', controlador.cliente_x_id);

module.exports = router;
