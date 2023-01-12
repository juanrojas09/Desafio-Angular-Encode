import { Injectable } from '@angular/core';
import { DataImterface } from './dataInterfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  datosEmployee:DataImterface[]=[
    {name:"Dashboard",route:"",icon:"../assets/icons/"},
    {name:"Bandeja de documentos",route:"",icon:"bandeja"},
    {name:"certificados",route:"",icon:"certificados"},
    {name:"Permisos/licencias",route:"",icon:"permisos"},
    {name:"Registrar Asistencia",route:"",icon:"asistencia"},
    
  ]
  datosRRHH:DataImterface[]=[
    {name:"Dashboard",route:"",icon:"../sidebar/assets/sidebarrrhh/dashboard.png"},
    {name:"Bandeja de documentos",route:"",icon:"bandeja"},
    {name:"Empleados",route:"",icon:"empleados"},
    {name:"Vacantes",route:"",icon:"vacantes"},
    {name:"Descargas",route:"",icon:"descargas"},
  ]

  datosSeguridad:DataImterface[]=[
    {name:"Dashboard",route:"",icon:"dashboard"},
  {name:"Seguridad de empleados",route:"",icon:"seguridad"},
  {name:"Politicas de seguridad",route:"",icon:"politicas"},
  {name:"Auditorias",route:"",icon:"auditorias"},
  ]

  datosAdmin:DataImterface[]=[
    {name:"Dashboard",route:"",icon:"dashboard"},
    {name:"Empresa",route:"",icon:"empresa"},
    {name:"Solicitudes",route:"",icon:"solicitudes"},
    {name:"Sucursales",route:"",icon:"sucursales"},
    {name:"Definicion de documentos",route:"",icon:"definicion"},

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
