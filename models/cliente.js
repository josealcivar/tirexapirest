/*
@Descripcion: Modelo de procariano
@Autor: jose viteri
@FechaCreacion: 20/05/2017
@UltimaFechaModificacion: 03/06/2017 @JoseViteri
*/
'use strict';
module.exports = function(sequelize, DataTypes) {
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
      type : DataTypes.STRING(1),
      allowNull : true
    }
  }, {
    classMethods: {
      associate: function(models) {
            // associations can be defined here
            Cliente.belongsTo(models.Vendedor);
            Cliente.belongsTo(models.Empresa);
      }
    }
  });



  return Cliente;

};
