/*
@Descripcion: Consulta de clientes al servidor
@Autor: Jose Alcivar
@FechaCreacion: 16/03/2018
*/

var modelo = require('../models');



const ObtenerClientes = (req, res, next) => {

  //  var clienteid = req.params.id;
  //  var vendedor = 1;
    modelo.Comentario.findAll({
  //    where: {
    //    id:clienteid
  //    }

    }).then(clientes => {
        const respuesta = clientes.map(cliente => {

            return Object.assign({}, {
              //  clienteid: cliente.id,
            //    codigointerno: cliente.codigointerno,
                comentario: promo.comentario,
            //    razonsocial: cliente.razonsocial,
            //    identificacion: cliente.identificacion,
            //    email: cliente.email,
            //    direccion: cliente.direccion,
            //    telefono: cliente.telefono,
            //    tipoprecio: cliente.tipoprecio,
                estado: cliente.estado
            });
        });
          console.log(respuesta);
        //  return 1;
          return res.json(respuesta);

    }).catch(error => {
      console.log("algo paso aqui");
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
