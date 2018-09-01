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
      classMethods: {
        associate: function(models) {
          // associations can be defined here
          Vendedor.belongsTo(models.Empresa);

        },
        buscarUsuarios: function(email){
          console.log("perooooo");
          console.log(email);
    return new Promise( (resolve, reject) => {
      if( !email || email === '' ) { return reject( { mensaje : 'No ingresó el email'} ); }
      return this.findOne({
        where : {
          email : email
        }
      })
      .then( vendedor => {
        console.log("aqui tomo los datos");
        console.log(vendedor.id);
        return resolve(vendedor);
      })
      .catch( fail => {
        return reject("hola");
      });
    });
  }
      }

  });



  // Vendedor.associate = function(models) {
  //   // associations can be defined here
  //   Vendedor.belongsTo(models.Empresa);
  //
  // };
  return Vendedor;

};
