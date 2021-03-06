/*
@Descripcion: Modelo de Detalles Pedidos
@Autor: jose Alcivar
@FechaCreacion: 08/09/2018
@UltimaFechaModificacion: 08/09/2018 @JoseAlcivar
*/
'use strict';
module.exports = function(sequelize, DataTypes) {
  var Det_pedido = sequelize.define('Det_pedido', {
    secuencia:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull:false
    },

    cantidad: {
      type : DataTypes.INTEGER.UNSIGNED,
      allowNull : false
    },
    tipoprecio: {
      type : DataTypes.INTEGER(1),
      allowNull : true
    },
    preciovta: {
      type : DataTypes.DECIMAL(10,4),
      allowNull : true,
      /*validate : {
        isIn : ['activo', 'inactivo' ]
      }*/
    },
    porcdescto: {
      type : DataTypes.DECIMAL(4,2),
      allowNull : true
    },
    porcpromo: {
      type : DataTypes.DECIMAL(4,2),
      allowNull : true
    },
    estado_orden: {
      type : DataTypes.STRING(1),
      allowNull : false
    },
    estado: {
      type      : DataTypes.BOOLEAN,
      allowNull : true
    }
  
  }, {});

Det_pedido.associate = function(models){
   // associations can be defined here
            Det_pedido.belongsTo(models.Empresa);
            // se crea un campo como primarykey que pertenece a Pedido
            Det_pedido.belongsTo(models.Pedido,{
              foreignKey: {
                primaryKey: true
              },
              onDelete: 'CASCADE'});
              // campo de producto
            Det_pedido.belongsTo(models.Producto,{
              foreignKey: {
                primaryKey: true
              },
onDelete: 'CASCADE'});
}


  return Det_pedido;

};
