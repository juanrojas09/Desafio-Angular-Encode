import { Component } from '@angular/core';

@Component({
  selector: 'app-empleado-home',
  templateUrl: './empleado-home.component.html',
  styleUrls: ['./empleado-home.component.css']
})
export class EmpleadoHomeComponent {
  fillerNav=[
    {name:"Dashboard",route:"",icon:"dashboard"},
    {name:"Bandeja de documentos",route:"",icon:"bandeja"},
    {name:"certificados",route:"",icon:"certificados"},
    {name:"Permisos/licencias",route:"",icon:"permisos"},
    {name:"Registrar Asistencia",route:"",icon:"asistencia"}
  ]
}
