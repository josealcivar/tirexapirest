/**
 * @description controllator about empresa
 * @author jose alcivar garcia
 * 
 */

 'use strict';
 
 let modeloEmpresa = require('../models').Empresa;
 let status = require('../response/status');
 let errors = require('../response/error');
 
 /**
  * @description funcion para obtener por estado o razonsocial 'like'
  *              
  * 
  */
const getEmpresaAll = async (req, res, next) => {

    
    let ll_emp_razonSocial=req.query.razonsocial;
    let ll_estado = req.query.estado;
    
    var options = {where: {}};
 
    if(ll_estado!=undefined){
       options.where.estado=ll_estado;
    }

    if(ll_emp_razonSocial!=undefined){
        options.where.razonsocial={$like: '%'+ll_emp_razonSocial+'%'};
    }

    try{
        const empresa = await modeloEmpresa.findAll(options);
        if(!empresa) return status.error(res,'no hay registros','',empresa);
        return status.okGet(res,'Successfull', empresa);
    }catch(fail){
        return status.error(res, 'hubo un error en el servicio', '', fail);
    }

 }

/**
 * @description funcion para obtener una empresa especifica
 *
 */
 const getEmpresaforId = async (req, res, next) => {

    let ll_empresaId = req.params.emp_id;
    console.log(res.locals);
    console.log("middleware de empresa id" + res.locals.empresaId);
    try{
        const empresa = await modeloEmpresa.GetEmpresaById(ll_empresaId);
        if(!empresa){return status.error(res, 'no se encontro registro', '', empresa);}   
        return status.okGet(res,'Successfull', empresa);
    }catch(fail){
        return status.error(res, 'hubo un error en el servicio', '', fail);
    }

 }
/**
 * @description funcion para crear una empresa
 * @author jose alcivar garcia
 * 
 */
  const createEmpresa = async (req, res, next) => {
    const empresaData = {
        razonsocial: req.body.razonsocial,
        estado: req.body.estado
    };
    
    try{
        if(!empresaData.razonsocial) throw errors.SEQUELIZE_VALIDATION_ERROR('no ingreso nombre');
        const empresa = await modeloEmpresa.create(empresaData);
        console.log("id empresa: " + empresa.get('id'));
        res.locals.empresaId = empresa.get('id');
        
   
        return status.okCreate(res,'create Successfull', empresa);
    }catch(fail){
        return status.error(res,'hubo un error en el servicio','', fail);
    }
   }

  const updateEmpresa = async (req, res, next) =>{
    let ll_empresaId = req.params.emp_id;

    const empresaData = {
        razonsocial: req.body.razonsocial,
        estado: req.body.estado
    };
    try{
        if(!empresaData.razonsocial) throw errors.SEQUELIZE_VALIDATION_ERROR('no ingreso nombre');
        const empresa = await modeloEmpresa.update(empresaData,{
            where:{id: ll_empresaId}});
        return status.okUpdate(res,'Update successfull', empresa);
    }catch(fail){
        return status.error(res,'falla de servicio', '', fail);
    }
    
  }



  const searchNameEmpresa = (req, res, next) =>{

}
 module.exports={
    getEmpresaAll,
    getEmpresaforId,
    createEmpresa,
    updateEmpresa,
    searchNameEmpresa
    }