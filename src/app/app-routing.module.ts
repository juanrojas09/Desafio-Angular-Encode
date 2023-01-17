import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RolesComponent } from './roles/roles/roles.component';
import { RolesModule } from './roles/roles.module';
import { LoginComponent } from './login/login/login.component';
import { EmpleadoHomeComponent } from './home-pages/empleado-home/empleado-home.component';
import { RRHHHomeComponent } from './home-pages/rrhh-home/rrhh-home.component';
import { SeguridadHomeComponent } from './home-pages/seguridad-home/seguridad-home.component';
import { AdministracionHomeComponent } from './home-pages/administracion-home/administracion-home.component';
import { SidebarComponent } from './home-pages/sidebar/sidebar.component';
import { DashboardComponent } from './home-pages/dashboard/dashboard.component';
import { RegistroComponent } from './register/registro/registro.component';

const routes:Routes=[
  //ruta por defecto

  {
    path:'login',
    component:LoginComponent
  },
  {

    path:'roles',
    component:RolesComponent
  },
  {
    path:'empleado',
    component:EmpleadoHomeComponent

  },
  {
    path:'RRHH',
    component:RRHHHomeComponent
  },
  {
    path:'seguridad',
    component:SeguridadHomeComponent
  },
  {
    path:'administracion',
    component:AdministracionHomeComponent
  },
  {
    path:'sidebar',
    component:SidebarComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent
    
  },
  {
    path:'bandeja',
    component:RolesComponent
  },
  {
    path:'register',
    component:RegistroComponent
  },
  {
    path:'**',
    redirectTo:'/login',
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
