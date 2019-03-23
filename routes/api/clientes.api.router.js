/*
@Descripcion: Api del procariano
@Autor: jose viteri
@FechaCreacion: 25/05/2017
@UltimaFechaModificacion: 05/06/2017 @EdisonMora (se lo puso bonito)
*/


/* jshint node: true */
'use strict';

var cliente = require('../../controllers/controller_clientes');

var models = require('../../models').Vendedor;
var express = require('express');
var router = express.Router();

//API

/* GET home page. */
router.get('/all/:vend_id', cliente.GetClientSeller);

/*
@Descripcion: se obtiene un solo cliente
*/

router.get('/:id', cliente.getClientById);

router.post('/create', cliente.createClient);

router.put('/update/:id', cliente.updateClient);
module.exports = router;
