/* @Descripcion: Consulta de productos
@Autor: Jose Alcivar
@FechaCreacion: 16/03/2018 */
'use strict';

var modelo  = require('../models');
var moment  = require('moment');
var ll_valor;
const Promo = require('../models/').Promocion;

/**
 * @Descripcion: Funcion que sirve para Extraer promocion de productos.
 * siempre y cuando exista promocion.
 *
 */
const PromocionProductos = () => {
  var porc_promo;
  let ll_fecha = moment();


  modelo.Detpromo.findAll({
    where: {
      fechadesde: {
        $lte: ll_fecha
      },
      fechahasta: {
        $gte: ll_fecha
      }
    },

    include: [
      {
        model: modelo.Promocion

      }
    ]

  }).then(promos => {

    const respuesta = promos.map(promo => {

      ll_valor = promo.porcentaje;

    });
    // si no existe promocion en las fechas, se setea un valor 1 por default
    if (respuesta.length == 0) {
      ll_valor = 0;

    }

  }).catch(error => {

    var status        = false;
    var mensaje       = 'No se obtuvieron producto';
    var jsonRespuesta = {
      status:       status,
      mensaje:      mensaje,
      errorCliente: error
    }
    console.log(jsonRespuesta);

  });

  return null;
}

/**
 * @Descripcion: Extrae Productos Destacados.
 * @param {[type]}   req  [description]
 * @param {[type]}   res  [description]
 * @param {Function} next [description]
 */

const ProductosDestacados = (req, res, next) => {

  PromocionProductos();

  modelo.Producto.findAll({
    include: [
      {
        model: modelo.Marca
      }, {
        model: modelo.Grupo
      }
    ],
    where: {
      destacado: 'S'
    }

  }).then(productos => {

    const respuesta = productos.map(producto => {

      return Object.assign({}, {

        codigoalterno: producto.codigoalterno,
        descripcion:   producto.descripcion,
        stock:         producto.stock,
        precio1:       producto.precio1,
        precio2:       producto.precio2,
        precio3:       producto.precio3,
        precio4:       producto.precio4,
        precio5:       producto.precio5,
        origen:        producto.origen,
        imagen:        producto.rutaimagen,
        porc_promo:    producto.porc_promo,
        grupo:         producto.Grupo.descripcion,
        marca:         producto.Marca.descripcion

      });
    });

    if (respuesta.length == 0) {
      console.log("No existen datos");

    }

    console.log("muestra los datos del producto destacado");
    return res.json(respuesta);

  }).catch(error => {

    var status        = false;
    var mensaje       = 'No se obtuvieron producto';
    var jsonRespuesta = {
      status:       status,
      mensaje:      mensaje,
      errorCliente: error
    }
    console.log(jsonRespuesta);
    res.json(jsonRespuesta);
  });
};

/*
  Descripcion: Busqueda de Productos en Consultas.
*/

const ProductosConsultados = (req, res, next) => {

  PromocionProductos();
  var ll_estado = "A";

  let ll_busqueda = req.params.searchItem;

  modelo.Producto.findAll({
    include: [
      {
        model: modelo.Marca
      }, {
        model: modelo.Grupo
      }
    ],
    where: {
      descripcion: {
        $like: '%' + ll_busqueda + '%'
      },
      estado: ll_estado
    }

  }).then(productos => {
    const respuesta = productos.map(producto => {

      return Object.assign({}, {
        id:            producto.id,
        codigoalterno: producto.codigoalterno,
        stock:         producto.descripcion,
        precio1:       producto.precio1,
        precio2:       producto.precio2,
        precio3:       producto.precio3,
        precio4:       producto.precio4,
        precio5:       producto.precio5,
        origen:        producto.origen,
        imagen:        producto.rutaimagen,
        porc_promo:    producto.porc_promo,
        grupo:         producto.Grupo.descripcion,
        marca:         producto.Marca.descripcion

      });
    });

    if (respuesta.length == 0) {
      console.log("No existen datos");

    }

    return res.json(respuesta);

  }).catch(error => {

    var status  = false;
    var mensaje = 'No se obtuvieron producto';
    var jsonRespuesta = {
      status:       status,
      mensaje:      mensaje,
      errorCliente: error
    }
    console.log(jsonRespuesta);
    res.json(jsonRespuesta);
  });
};

module.exports = {
  ProductosDestacados,
  ProductosConsultados
}
