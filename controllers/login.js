/*
@Descripcion: Consulta de clientes al servidor
@Autor: Jose Alcivar
@FechaCreacion: 16/03/2018
*/
'use strict';
var
var modelo = require('../models');
var llogin


const loginIn = (req, res, next) => {

  var ll_usuario = req.body.correo;
  var ll_password = req.body.password;



          return res.json(respuesta);

    }).catch(error => {

       var status = false;
        var mensaje = 'No se obtuvieron cliente'
        var jsonRespuesta = {
            status: status,
            mensaje: mensaje,
            errorCliente: error
        }
        console.log(jsonRespuesta);
        res.json(jsonRespuesta);
    });
};

module.exports = {
    loginIn
}
