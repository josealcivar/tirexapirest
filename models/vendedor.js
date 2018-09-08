/*
@Descripcion: Modelo de vendedor
@Autor: jose Alcivar
@FechaCreacion: 12/07/2018
@UltimaFechaModificacion: 03/06/2017 @JoseAlcivar
*/
'use strict';
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
      type: DataTypes.STRING,
      allowNull: true
    }
    
  }, {
  
  });

      Vendedor.associate = function(models) {
        // associations can be defined here
        Vendedor.belongsTo(models.Empresa);
      
      };
  return Vendedor;

};
