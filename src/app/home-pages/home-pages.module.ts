import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpleadoHomeComponent } from './empleado-home/empleado-home.component';
import { RRHHHomeComponent } from './rrhh-home/rrhh-home.component';
import { SeguridadHomeComponent } from './seguridad-home/seguridad-home.component';
import { AdministracionHomeComponent } from './administracion-home/administracion-home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [
    EmpleadoHomeComponent,
    RRHHHomeComponent,
    SeguridadHomeComponent,
    AdministracionHomeComponent,
    SidebarComponent,
    NavbarComponent,
    

  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule
    
  ],
  exports: [
    EmpleadoHomeComponent,
    RRHHHomeComponent,
    SeguridadHomeComponent,
    AdministracionHomeComponent,
    SidebarComponent,
    NavbarComponent

  ]
})
export class HomePagesModule { }
