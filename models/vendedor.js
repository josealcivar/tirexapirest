/*
@Descripcion: Modelo de vendedor
@Autor: jose Alcivar
@FechaCreacion: 12/07/2018
@UltimaFechaModificacion: 03/06/2017 @JoseAlcivar
*/
'use strict';

const errors    = require('../response/error');
const bcrypt = require('bcryptjs');

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

      Vendedor.BuscarUsuario = function(ll_usuario){
        return new Promise((resolve, reject)=>{
          if(!ll_usuario){return reject(errors.SEQUELIZE_VALIDATION_ERROR('no ingreso nombre'));}
          return Vendedor.findAll(
            {
              where:
              {
                nombre: 
                {
                $like: '%'+ll_usuario+'%'
                }
              }
            }
            ).then(vendedor=>{
            return resolve(vendedor);
          }).catch(err=>{
            return reject(errors.ERROR_HANDLER(err));
          });
        });
      };


      /**
       * @description create un vendedor
       * @date 23/03/2019
       * @author jose alcivar garcia
       * @modificated 23/03/2019
       */
      Vendedor.CreateVendedor= function(vendedor, transaction){
        return new Promise((resolve, reject)=>{
          
          if(!vendedor.nombre){return reject(errors.SEQUELIZE_VALIDATION_ERROR('no ingreso nombre'));}
          if(!vendedor.email){return reject(errors.SEQUELIZE_VALIDATION_ERROR('no ingreso email'));}
          if(!vendedor.password){return reject(errors.SEQUELIZE_VALIDATION_ERROR('no ingreso password'));}
          vendedor.password=bcrypt.hashSync(vendedor.password);
          return Vendedor.create(vendedor,transaction).then(vendedor=>{
            return resolve(vendedor);
          }).catch(fail=>{
            return reject(errors.ERROR_HANDLER(fail));
          });
        });
      };
 
      /**
       * @description verificador de un vendedor
       * @param vendedor datos del vendedor codigointerno, usuario, nombres
       * @author jose alcivar garcia
       * @date 23/03/2019
       * 
       **/
      Vendedor.verifyRepeatVendedor = function(vendedor){
        return new Promise((resolve, reject)=>{
          if(!vendedor.nombre){return reject(errors.SEQUELIZE_VALIDATION_ERROR('no ingreso nombre'));}
          if(!vendedor.email){return reject(errors.SEQUELIZE_VALIDATION_ERROR('no ingreso email'));}
          if(!vendedor.codigointerno){return reject(errors.SEQUELIZE_VALIDATION_ERROR('no ingreso codigo'));}
          return Vendedor.findAll({
            where: {
              $or:[
                {
                    nombre: vendedor.nombre.toUpperCase()
                }, 
                {  
                  email: vendedor.email
                },
                {  
                  codigointerno:vendedor.codigointerno.toUpperCase()
                }
              ]
            }
        }).then(vendedor=>{
            if(!vendedor) return reject(vendedor);
            return resolve(vendedor);
          }).catch(fail=>{
            return reject(errors.ERROR_HANDLER(fail));
          });
        });
      };
      
      
  return Vendedor;

};
