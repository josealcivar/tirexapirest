/*
@Descripcion: Modelo de Empresa
@Autor: jose Alcivar
@FechaCreacion: 08/09/2018
@UltimaFechaModificacion: 08/09/2018 @JoseAlcivar
*/
'use strict';
module.exports = function(sequelize, DataTypes) {
  var Empresa = sequelize.define('Empresa', {

    razonsocial: {
      type : DataTypes.STRING,
      allowNull : false
    },
    estado: {
      type      : DataTypes.BOOLEAN,
      allowNull : true
    }
  },{
   

  });
 /**
  * @description funcion para obtener una empresa por su Id
  * 
  */
  Empresa.GetEmpresaById = async function(empresaId){
      try{
        return await Empresa.findOne({where:{id:empresaId}});
      }catch(e){
        return reject(errors.ERROR_HANDLER(fail));
      }
  };


  return Empresa;

};
