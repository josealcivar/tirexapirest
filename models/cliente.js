/*
@Descripcion: Modelo de Clientes
@Autor: jose Alcivar
@FechaCreacion: 08/09/2018
@UltimaFechaModificacion: 08/09/2018 @JoseAlcivar
*/
'use strict';

const errors = require('../response/error');
const status = require('../response/status');

module.exports = (sequelize, DataTypes) => {
  var Cliente = sequelize.define('Cliente', {
    codigointerno: {
      type : DataTypes.STRING,
      allowNull : true
    },
    razonsocial: {
      type : DataTypes.STRING,
      allowNull : false
    },
    identificacion: {
      type : DataTypes.STRING,
      allowNull : true
    },
    email: {
      type : DataTypes.STRING,
      allowNull : false,
      /*validate : {
        isIn : ['activo', 'inactivo' ]
      }*/
    },
    direccion: {
      type : DataTypes.STRING,
      allowNull : true
    },
    telefono: {
      type : DataTypes.STRING,
      allowNull : true
    },
    tipoprecio: {
      type : DataTypes.STRING(1),
      allowNull : false
    },
    estado: {
      type      : DataTypes.BOOLEAN,
      allowNull : true
    }

    
  },{});

  Cliente.associate = function(models){
    
      Cliente.belongsTo(models.Vendedor);
      Cliente.belongsTo(models.Empresa);

  }

Cliente.createCliente = function(datacliente, transaction){
  return new Promise ((resolve, reject) => {
    if(!datacliente.identificacion) return reject(errors.SEQUELIZE_VALIDATION_ERROR('no ingreso identificacion'));
    if(!datacliente.razonsocial) return reject(errors.SEQUELIZE_VALIDATION_ERROR('no ingreso nombre'));
    return Cliente.create(datacliente,{transaction}).then(cliente=>{
      return resolve(cliente);}).catch(fail=>{
        return reject(errors.ERROR_HANDLER(fail));
      });
    });
  };

  Cliente.verifyRepeatClient = function(ll_razonsocial, identification){
    
    return new Promise ((resolve,reject)=> {
      return Cliente.findAll({where:
        {
            $or:[
            {
                razonsocial: ll_razonsocial.toUpperCase()
            }, 
            {   identificacion:identification
            }]
         }
        }).then(client=>{
          return resolve(client);
         }).catch(fail=>{
          return reject(errors.ERROR_HANDLER(fail));
         });

    });
  };

  return Cliente;

};
