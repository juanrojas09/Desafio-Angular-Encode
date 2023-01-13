import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Data } from 'src/app/data/data';
import { DataService } from 'src/app/data/data.service';
import { DataImterface } from 'src/app/data/dataInterfaces';
import { RoleInterface } from 'src/app/roleData/roleInterface';
import { RoleDataService } from '../../roleData/role-data.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  // fillerNav=[
  //   {name:"Dashboard",route:"",icon:"dashboard"},
  //   {name:"Bandeja de documentos",route:"",icon:"bandeja"},
  //   {name:"certificados",route:"",icon:"certificados"},
  //   {name:"Permisos/licencias",route:"",icon:"permisos"},
  //   {name:"Registrar Asistencia",route:"",icon:"asistencia"}
  // ]
  opened=true;

   
  
    nameRol: RoleInterface[] = [];
    dataOpction: DataImterface[] = []
    dataRol:RoleInterface[]=[{
      rol:this.getNameRol()}];
    constructor(private datos:DataService,private role:RoleDataService,private router:Router) {
      
     
      
    }

    getNameRol(){
      var rol=this.role.getData();
      var role=JSON.stringify(rol)
      return role;
      
      
    }
  ngOnInit(): void {

    //aca tengo que hacer un switch que verifique que rol es y de ahi retornar los datos que correspondan
var rol=this.role.getData();
this.getNameRol();
    
console.log(rol)
  
 
    switch (rol) {
      case "Empleado":
      this.dataOpction=this.datos.getData(1);
        break;
      case "Seguridad":
      this.dataOpction=this.datos.getData(3);
        break;
      case "Administrador":
      this.dataOpction=this.datos.getData(2);
        break;
        case "RRHH":
      this.dataOpction=this.datos.getData(2);
        break;
     
    }
    console.log(this.dataOpction)

  }

  
   redirect(route:string){
   switch(route){
      case "Dashboard":
      this.router.navigate(['/dashboard']);
      console.log("dashboard")
      break;
   }
  }
  
    shouldRun = true;
  
}
