import { Component } from '@angular/core';
import { RoleInterface } from 'src/app/roleData/roleInterface';
import { Roledata } from '../../roleData/roleData';
import { RoleDataService } from '../../roleData/role-data.service';

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
  
  constructor(private roles:RoleDataService) {
    //aca le mando al array de roledata el rol que corresponde, que se selecciono
  
  
  }

  pushRol(rol:string){
    console.log(rol)
    this.roles.setData(rol);
    console.log(this.roles.dataRol)
    
  }
}
