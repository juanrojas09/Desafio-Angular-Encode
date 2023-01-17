import { Injectable } from '@angular/core';
import { UserDataInterfae } from './userInterface';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor() { }
  user:UserDataInterfae[]=[{
    usuario:"juan",
    password:"123"
  }]
  setUser(){
    
    localStorage.setItem("user", this.user[0].usuario);
    localStorage.setItem("pass", this.user[0].password);
  }

  registerUser(user:any,pass:any){
    this.user.push({usuario:user,password:pass});
    localStorage.setItem("user", user);
    localStorage.setItem("pass", pass);
  }

  validateUser(user:any,pass:any){
    var userLocal=localStorage.getItem("user");
    var passLocal=localStorage.getItem("pass");
    if(user==userLocal && pass==passLocal){
      return true;
    }
    else{
      return false;
    }
  }
}

/**
 * 
 * esta seria un metodo de un service que me trae datos de una api, si tuviera la api armad
 * solo para tener un ejemplo de como se usa el subscribe
 *   TraerDatos(){
    this.http.get<SearchExpedientesResponse[]>(`${this.url}`).subscribe((resp)=>{
      let listadohtml = ''
      console.log(resp);
     
        this.resultados=resp;
          
  });
 */