/*
@Descripcion: Modelo de procariano
@Autor: jose viteri
@FechaCreacion: 20/05/2017
@UltimaFechaModificacion: 03/06/2017 @JoseViteri
*/
'use strict';
module.exports = function(sequelize, DataTypes) {
  var Producto = sequelize.define('Producto', {
    codigoalterno:{
      type: DataTypes.STRING,
      allowNull:false
    },
    descripcion: {
      type : DataTypes.STRING,
      allowNull : false
    },
    destacado: {
      type : DataTypes.STRING(1),
      allowNull : true
    },
    stock: {
      type : DataTypes.INTEGER.UNSIGNED,
      allowNull : true
      /*validate : {
        isIn : ['activo', 'inactivo' ]
      }*/
    },
    precio1: {
      type : DataTypes.DECIMAL(10,4),
      allowNull : true
    },
    precio2: {
      type : DataTypes.DECIMAL(10,4),
      allowNull : true
    },
    precio3: {
      type : DataTypes.DECIMAL(10,4),
      allowNull : true
    },
    precio4: {
      type : DataTypes.DECIMAL(10,4),
      allowNull : true
    },
    precio5: {
      type : DataTypes.DECIMAL(10,4),
      allowNull : true
    },
    porc_promo: {
      type: DataTypes.DECIMAL(4,2),
      allowNull:true
    },
    origen: {
      type : DataTypes.STRING(1),
      allowNull : true
    },
    rutaimagen: {
      type : DataTypes.STRING,
      allowNull : false
    },
    estado: {
      type : DataTypes.STRING(1),
      allowNull : true
    }
  }, {
    
  });

  Producto.associate = function(models) {
    // associations can be defined here
    Producto.belongsTo(models.Grupo);
    Producto.belongsTo(models.Marca);
    Producto.belongsTo(models.Empresa);


  }

  return Producto;

};
