/*
@Descripcion: Consulta de clientes al servidor
@Autor: Jose Alcivar
@FechaCreacion: 16/03/2018
*/
'use strict';

const sequelize	  = require('../models/').sequelize;
const modeloCliente = require('../models').Cliente;
let status = require('../response/status');
let errors = require('../response/error');

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
  console.log("middleware de empresa id" + res.locals.empresaId);
  try{
    const cliente = await modeloCliente.findOne({where:{id: ll_cliente}});
    if(!cliente)return status.error(res,'data not found','',cliente);
    return status.okGet(res, 'cliente successfull', cliente);
  }catch(fail){
    return status.error(res, 'fallo en servicio de clientes', '', fail);
  }
 }

/**
 * @description obtiene un cliente especifico por su id.
 * @author Jose Andre Alcivar
 */

const getClientByName = async (req, res) => {

 
    let ll_razonsocial = req.params.razonsocial;
    var options = {where: {}};
 
     if(ll_razonsocial!=undefined){
         options.where.razonsocial={$like: '%'+ll_razonsocial+'%'};
     }
 
     try{
         const cliente = await modeloCliente.findAll(options);
      
      if(!cliente)return status.errorNotFound(res,'data not found');
      return status.okGet(res, 'cliente successfull', cliente);
    }catch(fail){
      return status.error(res, 'fallo en servicio de clientes', '', fail);
    }
   }

/**
 * @description funcion para crear un cliente
 * 
 * 
 */
const createClient = async (req,res) => {
     
    

    const dataClient = {
        codigointerno   : req.body.codigointerno.toUpperCase(),
        razonsocial     : req.body.razonsocial.toUpperCase(),
        identificacion  : req.body.identificacion,
        email           : req.body.email,
        direccion       : req.body.direccion,
        telefono        : req.body.telefono,
        tipoprecio      : req.body.tipoprecio,
        estado          : req.body.estado,
        VendedorId      : 1,
        EmpresaId       : 1
    };
    let repeat = await modeloCliente.verifyRepeatClient(dataClient.razonsocial, dataClient.identificacion);
    if(repeat.length>0) return status.ERROR_ALLREADYEXIST(res,'Este registro ya existe');
    const t = await inicializarTransaccion();
    try{
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
                codigointerno   : req.body.codigointerno.toUpperCase(),
                razonsocial     : req.body.razonsocial.toUpperCase(),
                identificacion  : req.body.identificacion,
                email           : req.body.email,
                direccion       : req.body.direccion,
                telefono        : req.body.telefono,
                tipoprecio      : req.body.tipoprecio,
                estado          : req.body.estado 
    };
    const t = await inicializarTransaccion();
    if(!dataClient.razonsocial) throw errors.SEQUELIZE_VALIDATION_ERROR('no ingreso nombre');
    try{
        
        let repeat = await modeloCliente.verifyRepeatClient(dataClient.razonsocial, dataClient.identificacion);
        
                if(repeat.length>0 && repeat[0].id!=ll_clienteId){
                    return status.ERROR_ALLREADYEXIST(res,'Este registro ya existe');
                }
            
        
        const cliente = await modeloCliente.update(dataClient,{
            where : {id: ll_clienteId}});
            t.commit();
            return status.okUpdate(res,'update Successfull', cliente);
        }catch(err){
            t.rollback();
            return status.errorUpdate(res,'hubo un error', err);
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
    getClientByName,
    getClientById,
    createClient,
    updateClient
}