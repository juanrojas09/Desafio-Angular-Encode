import {ChangeDetectorRef, Component,Renderer2, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
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
    constructor(private datos:DataService,private role:RoleDataService,private router:Router, private rendered:Renderer2) {
      
     
      
    }

    getNameRol(){
      var rol=this.role.getData();
      var role=JSON.stringify(rol)
      return role;
      
      
    }
  ngOnInit(): void {
    this.detectEventSidebar();
    console.log(this.detectEventSidebar())

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
     // this.router.navigate(['/dashboard']);
      localStorage.setItem("route","dashboard");
      console.log("dashboard")
      break;
      case "Bandeja de documentos":
      //this.router.navigate(['/bandeja']);
      localStorage.setItem("route","bandeja");
      console.log("bandeja")
      break;
      case "Empleados":
      this.router.navigate(['/empleados']);
      break;
      case "Vacantes":
      this.router.navigate(['/vacantes']);
      break;
      case "Descargas":
      this.router.navigate(['/descargas']);
      break;

      
      
   }
  }

  redirectLogout(){
    this.router.navigate(['/login'])
        
  }


  @ViewChild('component') component!: ElementRef;
 
  detectEventSidebar(){
  var event=localStorage.getItem("route");
  switch (event) {
  case "dashboard":
    //return de un eemento html que renderize el componente del dashboard
 const dashboard= document.getElementById("content");
 console.log(dashboard)
 this.rendered.setValue(dashboard,"<app-dashboard></app-dashboard>");
 
   return true ;
  }
  return false;
  }
  

    shouldRun = true;
  
}


/**
 * en mat side nav content deberia hacer un metodo que devuelva true o false
 * dependiendo el evento, si detecta el evento click en dashboard
 * en la etiqueta de mat-sidenav renderize el componente del dashboard
 * 
 * 
 */
