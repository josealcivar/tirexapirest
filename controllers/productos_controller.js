/*
@Descripcion: Consulta de productos Destacados al servidor
@Autor: Jose Alcivar
@FechaCreacion: 16/03/2018
*/
'use strict';

var modelo      = require('../models');
var dateFormat  = require('dateformat');
const ModeloPromo	= require('../models/').Promocion;


const ProductosDestacados = (req, res, next) => {

    let fecha_actual = dateFormat(new Date(), "yyyy-mm-dd h:MM:ss");
    console.log(fecha_actual);
    console.log("algo paso");
   //var valores = ModeloPromo.buscarPromociones();
    //console.log(valores);
    console.log("resultado");
    console.log("todo bien");
    modelo.Producto.findAll({
      include: [{
          model: modelo.Marca
      },{
          model: modelo.Grupo
    }],
      where: {
      destacado: 'S'
      }

    }).then(productos => {
        const respuesta = productos.map(producto => {

            return Object.assign({}, {
                id: producto.secuencia,
                desde: producto.fechadesde,
                hasta: producto.fechahasta,
                porcentaje: producto.porcentaje

              //  codigoalterno: producto.codigoalterno,
            //    stock: producto.descripcion,
            //    precio1: producto.precio1,
            //    precio2: producto.precio2,
            //    precio3: producto.precio3,
            //    precio4: producto.precio4,
              //  precio5: producto.precio5,
            //    origen: producto.origen,
            //    imagen: producto.rutaimagen,
            //    grupo: producto.Grupo.descripcion,
            //    marca: producto.Marca.descripcion

            });
        });

         if(respuesta.length == 0){
           console.log("No existen datos");

         }


          return res.json(respuesta);

    }).catch(error => {

       var status = false;
        var mensaje = 'No se obtuvieron producto';
        var jsonRespuesta = {
            status: status,
            mensaje: mensaje,
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


    var ll_estado = "A";

    let ll_busqueda = req.params.searchItem;

    console.log(ll_busqueda);
    modelo.Producto.findAll({
      include: [{
          model: modelo.Marca
      },{
          model: modelo.Grupo
    }],
        where: {
            descripcion: {
                $like: '%' + ll_busqueda + '%'
            },
            estado: ll_estado
        }

    }).then(productos => {
        const respuesta = productos.map(producto => {

            return Object.assign({}, {
                id: producto.id,
                codigoalterno: producto.codigoalterno,
                stock: producto.descripcion,
                precio1: producto.precio1,
                precio2: producto.precio2,
                precio3: producto.precio3,
                precio4: producto.precio4,
                precio5: producto.precio5,
                origen: producto.origen,
                imagen: producto.rutaimagen,
                grupo: producto.Grupo.descripcion,
                marca: producto.Marca.descripcion

            });
        });

         if(respuesta.length == 0){
           console.log("No existen datos");

         }


          return res.json(respuesta);
2
    }).catch(error => {

       var status = false;
        var mensaje = 'No se obtuvieron producto';
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
    ProductosDestacados,
    ProductosConsultados
}
