import { Component } from '@angular/core';
import { RoleInterface } from 'src/app/roleData/roleInterface';
import { Roledata } from '../../roleData/roleData';
import { RoleDataService } from '../../roleData/role-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent {
  Empleado: string="Empleado";
  Seguridad: string="Seguridad";
  Administrador: string="Administrador";
  RRHH:string="RRHH"
  
  dataRole:RoleInterface[]=[
  ]
  
  constructor(private roles:RoleDataService,private router: Router) {
    //aca le mando al array de roledata el rol que corresponde, que se selecciono
  
  
  }
  redirect(rol:string){
   
  }
  pushRol(rol:string){
    console.log(rol)
    this.roles.setData(rol);

    console.log(this.roles.dataRol)
    switch (rol) {
      case "Empleado":
        localStorage.setItem("rol","Empleado")
      this.router.navigate(['/empleado']);
        break;
        case "RRHH":
        localStorage.setItem("rol","RRHH")
        this.router.navigate(['/RRHH']);
        break;
      case "Seguridad":
        localStorage.setItem("rol","Seguridad")
      this.router.navigate(['/seguridad']);
        break;
      case "Administrador":
        localStorage.setItem("rol","Administrador")
      this.router.navigate(['/administracion']);
        break;

  }
    
  }
}
