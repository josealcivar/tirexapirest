/*
@Descripcion: Consulta de clientes al servidor
@Autor: Jose Alcivar
@FechaCreacion: 16/03/2018
*/
'use strict';

var modelo          = require('../models');
const sequelize	 		= require('../models/').sequelize;

let status            = require('../response/status');
const ModeloVendedor	= require('../models/').Vendedor;
const ModeloEmpresa	= require('../models/').Empresa;

/**
 * 
 * @description funcion para crear un vendedor
 * @author jose alcivar garcia
 */

module.exports.CreateVendedor = async (req, res, next) => {

  
  let ll_empresa = 1;  
  
  let vendedor = {
    codigointerno : req.body.codigointerno,
    nombre        : req.body.nombre,
    email         : req.body.usuario,
    password      : req.body.contrasena,
    empresa       : ll_empresa,
    estado        : req.body.estado
    };

	let t = await inicializarTransaccion()
   
  try{
      const resultado = await ModeloVendedor.verifyRepeatVendedor(vendedor);
      if(resultado.length>0) return status.ERROR_ALLREADYEXIST(res,'Este registro ya existe');
      const vendedorCreado = await ModeloVendedor.CreateVendedor(vendedor, t);
      // res.locals.t 				 = t;
      res.locals.idVendedor = vendedorCreado.get('id');
      // next();
      t.commit();
      return status.okCreate(res, 'Vendedor creado correctamente',vendedorCreado.get('nombre'));
  }catch(fail){
          t.rollback();
	    	return status.ERROR_SERVIDOR(res, fail);
  } 
}

 /**
  * @description: Obtiene un vendedor por su usuario
  * @author:  josealcivar
  * @returns: datos del vendedor
  * 
  */

module.exports.ObtenercorreoVend = (req, res, next) => {

  var vendedor = req.body.correo;

  modelo.Vendedor.findAll({
    where: {
      usuario: vendedor
    }

  }).then(vendedors => {
    const data = vendedors.map(vendedor => {

      return Object.assign({}, {
        vendedorid      : vendedor.id,
        codigointerno   : vendedor.codigointerno,
        nombre          : vendedor.nombre,
        usuario         : vendedor.usuario,
        contrasena      : vendedor.contrasena,
        estado          : vendedor.estado
      });
    });

    return status.okGet(res, 'Busqueda exitosa', data);

    }).catch(error => {
      return status.error(res, 'No se obtuvieron registros', '', error);
      });
};



/*
  Funcion para verificar si existe un registro con usuario o clave interna
* */

module.exports.BuscarVendedor = async (req, res, next) => {

  let ll_usuario  = req.body.usuario;
  
  try{
    const vendedor = await  ModeloVendedor.BuscarUsuario(ll_usuario);
    if(!vendedor)return status.errorNotFound(res,'data not found');
    return status.okGet(res, 'Busqueda vendedor exitosa', vendedor);
  }catch(fail){

    return status.ERROR_SERVIDOR(res, fail.errors);
  }
 
 
};

/**
 * @description funcion para actualizar datos del usuario
 * @param {request} req 
 * @param {response} res 
 * @author jose alcivar garcia
 */

module.exports.updateVendedor = async (req,res) => {
  const ll_vendedorId = req.params.id; // id del cliente a editar
  const dataVendedor = {
              codigointerno   : req.body.codigointerno.toUpperCase(),
              nombre          : req.body.nombre.toUpperCase(),
              email           : req.body.usuario 
  };
  const t = await inicializarTransaccion();
  try{
      let repeat = await ModeloVendedor.verifyRepeatVendedor(dataVendedor);
              if(repeat.length>0){
                repeat.forEach(element => {
                    if( element.id!=ll_vendedorId){
                      return status.ERROR_ALLREADYEXIST(res,'Este registro ya existe');
                    }    
                });
              }
      const vendedor = await ModeloVendedor.update(dataVendedor,{
          where : {id: ll_vendedorId}});
          t.commit();
          return status.okUpdate(res,'update Successfull', vendedor);
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
}

// module.exports = {
//   ObtenercorreoVend,
//   updateVendedor
// }
