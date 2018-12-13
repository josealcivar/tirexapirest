/*
@Descripcion: Modelo de Detalles Caracteristicas
@Autor: jose Alcivar
@FechaCreacion: 08/09/2018
@UltimaFechaModificacion: 08/09/2018 @JoseAlcivar
*/

'use strict';
module.exports = function(sequelize, DataTypes) {
  var Det_caracter = sequelize.define('Det_caracter', {
    id:           {
      type          : DataTypes.BIGINT,
      primaryKey    : true,
      autoIncrement : true,
      allowNull     : false
    },
    secuencia:    {
      type        : DataTypes.INTEGER,
      primaryKey  : true,
      allowNull   : false
    },
    descripcion:  {
      type        : DataTypes.STRING,
      allowNull   : false
    },
    estado:       {
      type      : DataTypes.BOOLEAN,
      allowNull   : true
    }


  }, {});


  Det_caracter.associate = function(models){
    
       // associations can be defined here
            Det_caracter.belongsTo(models.Empresa);
             // campo de Caracteristica
             Det_caracter.belongsTo(models.Caracteristica,
               {
               foreignKey: {
                               primaryKey: true,
                               allowNull: false
                             }
                });

  }



  return Det_caracter;

};
