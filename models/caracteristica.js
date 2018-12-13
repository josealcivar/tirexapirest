/*
@Descripcion: Modelo de Caracteristica de Productos
@Autor: jose Alcivar
@FechaCreacion: 08/09/2018
@UltimaFechaModificacion: 08/09/2018 @JoseAlcivar
*/
'use strict';
module.exports = (sequelize, DataTypes) => {
  var Caracteristica = sequelize.define('Caracteristica', {
    id:{
      type       : DataTypes.BIGINT,
      primaryKey : true,
      autoIncrement: true,
      allowNull  : false
    },
    estado: {
      type      : DataTypes.BOOLEAN,
      allowNull : false
    }

  }, {});
    Caracteristica.associate = function(models){
      
    
           // associations can be defined here
            Caracteristica.belongsTo(models.Empresa);
            Caracteristica.belongsTo(models.Producto,
             {
               foreignKey: {
                               primaryKey: true,
                               allowNull: false
                             },
                onDelete: 'CASCADE'});
  
            }

  return Caracteristica;

};
