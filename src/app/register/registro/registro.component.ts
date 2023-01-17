import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/login/userService/user-service.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {


   form= new FormGroup({
    usuario: new FormControl(''),
    contraseña: new FormControl('')
  });
  constructor(private dataUser:UserServiceService,private router:Router) {
    
  }
  submitted = false;
  redirectLogin(){
    this.router.navigate(['/login']);
    
  }

  registerUser(){
    this.dataUser.registerUser("juan","123");
    this.redirectLogin();
  }

  saveData(){
    var userForm=this.form.value.usuario;
     var passForm=this.form.value.contraseña;
    this.dataUser.registerUser(userForm,passForm);
     
     this.submitted = true;
   
     if(this.form.invalid){
       console.log("invalido");
       return;
     }
     console.log(this.form.value);
     this.redirectLogin();
 
   }

  }

