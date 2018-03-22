/*
@Descripcion: Consulta de clientes al servidor
@Autor: Jose Alcivar
@FechaCreacion: 16/03/2018
*/
'use strict';

var modelo = require('../models');



const ObtenerClientes = (req, res, next) => {

  //  var clienteid = req.params.id;
  //  var vendedor = 1;
    modelo.Cliente.findAll({
  //    where: {
    //    id:clienteid
  //    }

    }).then(clientes => {
        const respuesta = clientes.map(cliente => {

            return Object.assign({}, {
                clienteid: cliente.id,
                codigointerno: cliente.codigointerno,
                razonsocial: cliente.razonsocial,
                identificacion: cliente.identificacion,
                email: cliente.email,
                direccion: cliente.direccion,
                telefono: cliente.telefono,
                tipoprecio: cliente.tipoprecio,
                estado: cliente.estado
            });
        });

         if(respuesta.length == 0){
           console.log("No existen datos");

         }


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
    ObtenerClientes
}
