/*
@Descripcion: Modelo de procariano
@Autor: jose viteri
@FechaCreacion: 20/05/2017
@UltimaFechaModificacion: 03/06/2017 @JoseViteri
*/
'use strict';
module.exports = function(sequelize, DataTypes) {
  var Vendedor = sequelize.define('Vendedor', {
    codigointerno: {
      type : DataTypes.STRING,
      allowNull : true
    },
    nombre: {
      type : DataTypes.STRING,
      allowNull : false
    },
    usuario: {
      type : DataTypes.STRING,
      allowNull : true
    },
    contrasena: {
      type : DataTypes.STRING,
      allowNull : false,
    },
    estado: {
      type : DataTypes.STRING,
      allowNull : true
    }
  }, {});

  Vendedor.associate = function(models) {
    // associations can be defined here
    Vendedor.belongsTo(models.Empresa);

  };
  return Vendedor;

};
