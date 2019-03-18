/**
 * @description rutas del api empresa
 * @author jose alcivar garcia
 * 
 */

 'use strict';

 var controller_empresa = require('../../controllers/controller_empresa');

 var express = require('express');
 var router = express.Router();

 
 router.get('/all/empresa', controller_empresa.getEmpresaAll);
 router.get('/:emp_id', controller_empresa.getEmpresaforId);
 router.post('/create', controller_empresa.createEmpresa);
 
 module.exports = router; 