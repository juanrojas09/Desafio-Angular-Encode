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


      @ViewChild('component') component!: ElementRef;

    constructor(private datos:DataService,private role:RoleDataService,private router:Router, private rendered:Renderer2) {
      
     
      
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

  public retVal:number=0;
   redirect(route:string){
    
    this.detectEventSidebar();
    console.log(this.detectEventSidebar())
   switch(route){
      case "Dashboard":
     // this.router.navigate(['/dashboard']);
      localStorage.setItem("route","dashboard");
      this.retVal=1;
      console.log("dashboard")
      break;
      case "Bandeja de documentos":
      //this.router.navigate(['/bandeja']);
      localStorage.setItem("route","bandeja");
      this.retVal=2;
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


  public value:string='';
 


  /**
 * en mat side nav content deberia hacer un metodo que devuelva true o false
 * dependiendo el evento, si detecta el evento click en dashboard
 * en la etiqueta de mat-sidenav renderize el componente del dashboard
 * 
 * 
 */
  detectEventSidebar(){
    
  var event=localStorage.getItem("route");
  switch (event) {
case "dashboard":
    this.value="<app-dashboard></app-dashboard>";  
    //const dashboard= this.component.nativeElement;
    //console.log("das",dashboard)
    console.log(this.retVal)
    //var hola=this.rendered.setAttribute(dashboard,"value","<app-dashboard></app-dashboard>");
    break;
    
  
case "bandeja":
   this.value=" <app-bandeja-doc></app-bandeja-doc>";
    // const bandeja= this.component.nativeElement;
    //console.log("bandeja",bandeja)
    console.log(this.retVal)
    //var hola=this.rendered.setAttribute(bandeja,"value","<app-bandeja></app-bandeja>");
    break;
  
 
   
  }
 
  }
  

    shouldRun = true;
  
}



