/*
@Descripcion: Modelo de procariano
@Autor: jose viteri
@FechaCreacion: 20/05/2017
@UltimaFechaModificacion: 03/06/2017 @JoseViteri
*/
'use strict';
module.exports = function(sequelize, DataTypes) {
  var Det_caracter = sequelize.define('Det_caracter', {
    id:           {
      type          : DataTypes.INTEGER,
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
      type        : DataTypes.STRING(1),
      allowNull   : true
    }
  }, {});

  Det_caracter.associate = function(models) {
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
