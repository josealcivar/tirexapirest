/*
@Descripcion: Modelo de procariano
@Autor: jose viteri
@FechaCreacion: 20/05/2017
@UltimaFechaModificacion: 03/06/2017 @JoseViteri
*/
'use strict';
module.exports = function(sequelize, DataTypes) {
  var Pedido = sequelize.define('Pedido', {
    id:{
      type: DataTypes.INTEGER,
       primaryKey: true,
      allowNull:false
    },
    fecha: {
      type : DataTypes.DATE,
      primaryKey: true,
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
    porcdesct: {
      type : DataTypes.DECIMAL(3,2),
      allowNull : true,
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
    estado_orden: {
      type : DataTypes.STRING(1),
      allowNull : false
    },
    estado: {
      type : DataTypes.STRING(1),
      allowNull : true
    }
  }, {});

  Pedido.associate = function(models) {
    // associations can be defined here
     Pedido.belongsTo(models.Vendedor);
     Pedido.belongsTo(models.Cliente);
     Pedido.belongsTo(models.Empresa);
     Pedido.hasMany(models.Det_pedido, {
        foreignKey: {
          primaryKey: true
        }
     });

  }

  return Pedido;

};
