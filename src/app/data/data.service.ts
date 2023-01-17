import { Injectable } from '@angular/core';
import { DataImterface } from './dataInterfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  datosEmployee:DataImterface[]=[
    {name:"Dashboard",route:"",icon:"../../../assets/sidebar empleado/dashboard.png"},
    {name:"Bandeja de documentos",route:"",icon:"../../../assets/sidebar empleado/bandeja-doc.png"},
    {name:"Certificados",route:"",icon:"../../../assets/sidebar empleado/cert.png"},
    {name:"Permisos",route:"",icon:"../../../assets/sidebar empleado/permisos.png"},
    {name:"Registrar Asistencia",route:"",icon:"../../../assets/sidebar empleado/asistencias.png"},
    
  ]
  datosRRHH:DataImterface[]=[
    {name:"Dashboard",route:"",icon:"../../../assets/sidebar rrhh/dashboard.png"},
    {name:"Bandeja de documentos",route:"",icon:"../../../assets/sidebar rrhh/bandeja-doc.png"},
    {name:"Empleados",route:"",icon:"../../../assets/sidebar rrhh/empleados.png"},
    {name:"Vacantes",route:"",icon:"../../../assets/sidebar rrhh/vacantes.png"},
    {name:"Descargas",route:"",icon:"../../../assets/sidebar rrhh/descargas.png"},
  ]

  datosSeguridad:DataImterface[]=[
    {name:"Dashboard",route:"",icon:"../../../assets/sidebar seguridad/dashboard.png"},
  {name:"Seguridad de empleados",route:"",icon:"../../../assets/sidebar seguridad/seguridad.png"},
  {name:"Politicas de seguridad",route:"",icon:"../../../assets/sidebar seguridad/politicas.png"},
  {name:"Auditorias",route:"",icon:"../../../assets/sidebar seguridad/auditorias.png"},
  ]

  datosAdmin:DataImterface[]=[
    {name:"Dashboard",route:"",icon:"../../../assets/sidebar admin/dashboard.png"},
    {name:"Empresa",route:"",icon:"../../../assets/sidebar admin/empresa.png"},
    {name:"Solicitudes",route:"",icon:"../../../assets/sidebar admin/solicitudes.png"},
    {name:"Sucursales",route:"",icon:"../../../assets/sidebar admin/sucursales.png"},
    {name:"Definicion de documentos",route:"",icon:"../../../assets/sidebar admin/documentos.png"},

  ]
  constructor() { }

  getData(opcion : number){

    switch (opcion) {
      case 1:
    return this.datosEmployee;
      case 2:
    return this.datosRRHH;
      case 3:
        return this.datosSeguridad;
      case 4:
        return this.datosAdmin;
      default:
        break;

  }
  return this.datosEmployee;
}
}
