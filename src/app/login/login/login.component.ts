import { Component, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MyValidations } from './MyValidations';
import { RoleDataService } from '../../roleData/role-data.service';
import { Roledata } from '../../roleData/roleData';
import { UserServiceService } from '../userService/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  myform= new FormGroup({
    usuario: new FormControl(''),
    contraseña: new FormControl('')
  });
  submitted = false;


  constructor(private router:Router, private formBuilder:FormBuilder,private dataUser:UserServiceService) {
   
    
  }
  
 
 
  ngOninit(){
  

    this.myform = this.formBuilder.group({
      usuario:['',Validators.required],
      contraseña:['',Validators.required]
    });
    this.myform.controls["usuario"].valueChanges.subscribe(value => {
      console.log(value);
      });
    
  }
  saveData(){
   var userForm=this.myform.value.usuario;
    var passForm=this.myform.value.contraseña;
    this.submitted = true;
   this.dataUser.validateUser(userForm,passForm);
    if(this.myform.invalid || this.dataUser.validateUser(userForm,passForm)==false){
      console.log("invalido");
      return false;
    }else{
      console.log(this.myform.value);
      this.redirect();
    }
    
 
    return true;
    

  }

  userCorrecto:boolean=true;

 validateUserForm(){
    var userForm=this.myform.value.usuario;
    var passForm=this.myform.value.contraseña;
    
    if( this.dataUser.validateUser(userForm,passForm)==false){
     console.log("invalido"); 
     this.userCorrecto=false;
    }else{
      
    
      this.userCorrecto=true;
    }

  }

  redirect(){
    
    this.router.navigate(['/roles']);
    
  }

  registerRedirect(){
    this.router.navigate(['/register']);
  }

redirectForgot(){
  this.router.navigate(['/forgot']);
}

 


}
