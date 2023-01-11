import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RolesComponent } from './roles/roles/roles.component';
import { RolesModule } from './roles/roles.module';
import { LoginComponent } from './login/login/login.component';

const routes:Routes=[
  {
    path:'login',
    component:LoginComponent
  },
  {

    path:'roles',
    component:RolesComponent
  }

]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
    
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
