/*
@Descripcion: Consulta de clientes al servidor
@Autor: Jose Alcivar
@FechaCreacion: 16/03/2018
*/
'use strict';

var modelo          = require('../models');
const sequelize	 		= require('../models/').sequelize;

const bcrypt = require('bcryptjs');
let status            = require('../response/status');
const ModeloVendedor	= require('../models/').Vendedor;
const ModeloEmpresa	= require('../models/').Empresa;

/**
 * 
 * @description funcion para crear un vendedor
 * @author jose alcivar garcia
 */

module.exports.CreateVendedor = async (req, res, next) => {

  let ll_estado = true;
  let ll_empresa = 1;  
  
  let vendedor = {
    codigointerno : req.body.codigointerno,
    nombre        : req.body.nombre,
    email         : req.body.usuario,
    password      : bcrypt.hashSync(req.body.contrasena),
    estado        : ll_estado
 
    };

	let t = await inicializarTransaccion()
   
  try{
      const resultado = await ModeloVendedor.verifyRepeatVendedor(vendedor.nombre);
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

  let ll_usuario       = req.body.usuario;
  
  try{
    const vendedor = await  ModeloVendedor.BuscarUsuario(ll_usuario);
    if(!vendedor)return status.errorNotFound(res,'data not found');
    return status.okGet(res, 'Busqueda vendedor exitosa', vendedor);
  }catch(fail){

    return status.ERROR_SERVIDOR(res, fail.errors);
  }
 
 
};

  



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
//   BuscarVendedor
// }
