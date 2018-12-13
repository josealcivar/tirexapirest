/*
@Descripcion: Consulta de clientes al servidor
@Autor: Jose Alcivar
@FechaCreacion: 16/03/2018
*/
'use strict';

let modelo = require('../models');
let status = require('../response/status');


const GetClientSeller = (req, res) => {

  let ll_vendedor = req.params.vend_id;
  
    modelo.Cliente.findAll({
      where: {
        VendedorId: ll_vendedor
      }

    }).then(clientes => {
        const data = clientes.map(cliente => {

            return Object.assign({}, {

                clienteid       : cliente.id,
                codigointerno   : cliente.codigointerno,
                razonsocial     : cliente.razonsocial,
                identificacion  : cliente.identificacion,
                email           : cliente.email,
                direccion       : cliente.direccion,
                telefono        : cliente.telefono,
                tipoprecio      : cliente.tipoprecio,
                estado          : cliente.estado
            });
        });

        return status.okGet(res, 'Busqueda exitosa', data);

    }).catch(error => {
        return status.error(res, 'No se obtuvieron registros', '', error);
        });
};

/**
 * @description obtiene un cliente especifico por su id.
 * @author Jose Andre Alcivar
 * @param {*} req 
 * @param {*} res 
 */

const cliente_x_id = (req, res) => {

  let ll_cliente = req.params.id;
  console.log(ll_cliente);
    modelo.Cliente.findAll({
      where: {
        id: ll_cliente
      }

    }).then(clientes => {
        const respuesta = clientes.map(cliente => {

            return Object.assign({}, {
                clienteid       : cliente.id,
                codigointerno   : cliente.codigointerno,
                razonsocial     : cliente.razonsocial,
                identificacion  : cliente.identificacion,
                email           : cliente.email,
                direccion       : cliente.direccion,
                telefono        : cliente.telefono,
                tipoprecio      : cliente.tipoprecio,
                estado          : cliente.estado
            });
        });
        return status.okGet(res, 'Busqueda exitosa', data);

    }).catch(error => {
        return status.error(res, 'No se obtuvieron registros', '', error);
        });
};

module.exports = {
    GetClientSeller,
    cliente_x_id

}
