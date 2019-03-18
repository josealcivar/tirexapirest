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



module.exports.CreateVendedor = (req, res, next) => {

  let ll_estado = true;
  let ll_empresa = 1;  
  
  let vendedor = {
    codigointerno : req.body.codigointerno,
    nombre        : req.body.nombre,
    email         : req.body.usuario,
    password      : bcrypt.hashSync(req.body.contrasena),
    estado        : ll_estado
 
    };

    

	inicializarTransaccion().then( t => {
    
    ModeloVendedor.CreateVendedor(vendedor, t).then(vendedorCreado => {
      // res.locals.t 				 = t;
      // res.locals.idVendedor = vendedorCreado.get('id');
      
      // next();
      //t.commit();
      console.log("debe crear un registro");
      console.log(vendedorCreado);
      return status.okCreate(res, 'Vendedor creado correctamente',vendedorCreado.get('id'));
        }).catch(fail =>{
         // t.rollback();
          
          return status.error(res,'','', fail);
      });

	}).catch( fail => {
		return status.ERROR_SERVIDOR(res, fail);
	});

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

module.exports.BuscarVendedor = (req, res, next) => {

  let ll_usuario       = 'joseandre';//req.body.usuario;
  let ll_codigointerno = 'QWERTY';//req.body.codigointerno;

 ModeloVendedor.BuscarUsuario(ll_usuario, ll_codigointerno).then(success => {
 
            if(!success){
              console.log("debe crear");
              this.CrearVendedor(req, res, next);
            }else{
              inicializarTransaccion().then(t => {
                return status.okGet(res, 'Busqueda exitosa', t);
              }).catch(fail => {
                console.log("errores");
                return status.ERROR_SERVIDOR(res, fail.errors);
              });
          }
      }).catch(fail => {
       
          return status.ERROR_SERVIDOR(res, fail);
        });

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
