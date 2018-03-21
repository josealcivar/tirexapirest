/*
@Descripcion: Modelo de procariano
@Autor: jose viteri
@FechaCreacion: 20/05/2017
@UltimaFechaModificacion: 03/06/2017 @JoseViteri
*/
'use strict';
module.exports = function(sequelize, DataTypes) {
  var Pedido = sequelize.define('Pedido', {
    fecha: {
      type : DataTypes.DATE,
      allowNull : true
    },
    subtotal: {
      type : DataTypes.DECIMAL(10,4),
      allowNull : false
    },
    impuesto: {
      type : DataTypes.DECIMAL(10,4),
      allowNull : true
    },
    porcdescto: {
      type : DataTypes.DECIMAL(2,2),
      allowNull : false,
      /*validate : {
        isIn : ['activo', 'inactivo' ]
      }*/
    },
    descuento: {
      type : DataTypes.DECIMAL(10,4),
      allowNull : true
    },
    total: {
      type : DataTypes.DECIMAL(10,4),
      allowNull : true
    },
    orden_pedido: {
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
         Pedido.belongsTo(models.Empresa);
      }
    }

  });
  return Pedido;

};
