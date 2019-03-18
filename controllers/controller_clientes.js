/*
@Descripcion: Consulta de clientes al servidor
@Autor: Jose Alcivar
@FechaCreacion: 16/03/2018
*/
'use strict';

const sequelize	  = require('../models/').sequelize;
const modeloCliente = require('../models').Cliente;
let status = require('../response/status');

/**
 * @description funcion para obtener los clientes que pertenecen a un vendedor
 * @param {*} req 
 * @param {*} res 
 */
const GetClientSeller = async (req, res) => {

  let ll_vendedor = req.params.vend_id;
  try{
    const clientes = await modeloCliente.findAll({where: {VendedorId: ll_vendedor}});
        return status.okGet(res, 'Busqueda cliente exitosa', clientes);
  }catch(fail){
      return status.error(res, 'No se obtuvieron registros', '', fail);
    }
};

/**
 * @description obtiene un cliente especifico por su id.
 * @author Jose Andre Alcivar
 */

const getClientById = async (req, res) => {

  let ll_cliente = req.params.id;
  try{
    const cliente = await modeloCliente.findOne({where:{id: ll_cliente}});
    if(!cliente)return status.error(res,'data not found','',cliente);
    return status.okGet(res, 'cliente successfull', cliente);
  }catch(fail){
    return status.error(res, 'fallo en servicio de clientes', '', fail);
  }
  
    
     
     
};
/**
 * @description funcion para crear un cliente
 * 
 * 
 */
const createClient = async (req,res) => {
    const dataClient = {
        codigointerno   : req.body.codigointerno,
        razonsocial     : req.body.razonsocial,
        identificacion  : req.body.identificacion,
        email           : req.body.email,
        direccion       : req.body.direccion,
        telefono        : req.body.telefono,
        tipoprecio      : req.body.tipoprecio,
        estado          : req.body.estado
    };
    const t = await inicializarTransaccion();
    try{
       console.log(t);
       const cliente = await modeloCliente.createCliente(dataClient, t);
       t.commit();
       return status.okCreate(res,'create Successfull', cliente);
    }catch(fail){
        t.rollback();
        return status.ERROR_SERVIDOR(res, fail);
    }
    
};

/**
 * @description funcion para editar los registros de un cliente
 */
const updateClient = async (req,res) => {
    const ll_clienteId = req.params.id; // id del cliente a editar
    const dataClient = {
                codigointerno   : req.body.codigointerno,
                razonsocial     : req.body.razonsocial,
                identificacion  : req.body.identificacion,
                email           : req.body.email,
                direccion       : req.body.direccion,
                telefono        : req.body.telefono,
                tipoprecio      : req.body.tipoprecio,
                estado          : req.body.estado
    };
    try{
        if(!dataClient.razonsocial) throw errors.SEQUELIZE_VALIDATION_ERROR('no ingreso nombre');
    const cliente = await modeloCliente.update(dataClient,{
            where : {id: ll_clienteId}});
            return status.okCreate(res,'update Successfull', cliente);
        }catch(err){
            return status.error(res,'hubo un error','', err);
        }
}


function inicializarTransaccion(){
	return new Promise( (resolve, reject) => {
		sequelize.transaction(
      {
        autocommit: false
      }
    )
		.then( result => {
			return resolve(result);
		})
		.catch( fail => {
			return reject(fail);
		});
	});
};

module.exports = {
    GetClientSeller,
    getClientById,
    createClient,
    updateClient

}
