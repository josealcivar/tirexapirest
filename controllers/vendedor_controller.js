/*
@Descripcion: Consulta de clientes al servidor
@Autor: Jose Alcivar
@FechaCreacion: 16/03/2018
*/
'use strict';

var modelo = require('../models');



const ObtenercorreoVend = (req, res, next) => {

  var vendedor = req.body.correo;
  //  var vendedor = 1;
  modelo.Vendedor.findAll({
    where: {
      usuario: vendedor
    }

  }).then(vendedors => {
    const respuesta = vendedors.map(vendedor => {

      return Object.assign({}, {
        vendedorid: vendedor.id,
        codigointerno: vendedor.codigointerno,
        nombre: vendedor.nombre,
        usuario: vendedor.usuario,
        contrasena: vendedor.contrasena,
        estado: vendedor.estado
      });
    });

    if (respuesta.length == 0) {
      console.log("No existen datos");

    }

    console.log(respuesta);
    return res.json(respuesta);

  }).catch(error => {

    var status = false;
    var mensaje = 'No se obtuvo datos de vendedor'
    var jsonRespuesta = {
      status: status,
      mensaje: mensaje,
      errorCliente: error
    }
    console.log(jsonRespuesta);
    res.json(jsonRespuesta);
  });
};

const IngresoVendedorUsr = (req, res, next) => {

  let ll_stado = 'activo';


  let vendedor = {
    codigointerno: req.body.codigointerno,
    nombre:        req.body.nombre,
    usuario:       req.body.usuario,
    contrasena:    req.body.contrasena,
    estado:        ll_stado
  };

  modelo.Vendedor.create({
    where: {
      usuario: vendedor
    }

  }).then(vendedors => {
    const respuesta = vendedors.map(vendedor => {

      return Object.assign({}, {
        vendedorid: vendedor.id,
        codigointerno: vendedor.codigointerno,
        nombre: vendedor.nombre,
        usuario: vendedor.usuario,
        contrasena: vendedor.contrasena,
        estado: vendedor.estado
      });
    });

    if (respuesta.length == 0) {
      console.log("No existen datos");

    }

    console.log(respuesta);
    return res.json(respuesta);

  }).catch(error => {

    var status = false;
    var mensaje = 'No se obtuvo datos de vendedor'
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
  ObtenercorreoVend
}
