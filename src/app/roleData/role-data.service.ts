import { Injectable } from '@angular/core';
import { RoleInterface } from './roleInterface';

@Injectable({
  providedIn: 'root'
})
export class RoleDataService {
dataRol:RoleInterface[]=[
  
]
  constructor() {
    
    ;
   }

  getData(){
    var rol= localStorage.getItem("rol");
   
    return rol;
    
    
  }

   setData(rol:string){
    this.dataRol.push({rol:rol});
    localStorage.setItem("rol",this.dataRol[0].rol)
  }
  
}
