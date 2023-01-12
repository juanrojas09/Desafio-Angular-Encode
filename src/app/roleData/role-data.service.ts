import { Injectable } from '@angular/core';
import { RoleInterface } from './roleInterface';

@Injectable({
  providedIn: 'root'
})
export class RoleDataService {
dataRol:RoleInterface[]=[
  
]
  constructor() { }

  getData(){
    return this.dataRol;
    console.log(this.dataRol)
  }

   setData(rol:string){
    this.dataRol.push({rol:rol});

  }
}
