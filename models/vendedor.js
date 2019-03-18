/*
@Descripcion: Modelo de vendedor
@Autor: jose Alcivar
@FechaCreacion: 12/07/2018
@UltimaFechaModificacion: 03/06/2017 @JoseAlcivar
*/
'use strict';

const errors    = require('../response/error');

module.exports = function(sequelize, DataTypes) {
  let Vendedor = sequelize.define('Vendedor', {
    codigointerno: {
      type: DataTypes.STRING,
      allowNull: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    estado: {
      type      : DataTypes.BOOLEAN,
      allowNull: true
    }
    
  }, {
  
  });

      Vendedor.associate = function(models) {
        // associations can be defined here
        Vendedor.belongsTo(models.Empresa);
      
      };

      Vendedor.BuscarUsuario = function(ll_usuario, ll_codigointerno){
        return new Promise((resolve, reject)=>{

        });
      };

      Vendedor.CreateVendedor= function(vendedor, transaction){
        return new Promise((resolve, reject)=>{
          
          if(!vendedor.nombre){return reject(errors.SEQUELIZE_VALIDATION_ERROR('no ingreso nombre'));}
          if(!vendedor.email){return reject(errors.SEQUELIZE_VALIDATION_ERROR('no ingreso email'));}
          return Vendedor.create(vendedor,transaction).then(vendedor=>{
            return resolve(vendedor);
          }).catch(fail=>{
            return reject(errors.ERROR_HANDLER(fail));
          });
        });
      };
      
      
  return Vendedor;

};
