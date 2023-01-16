import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpleadoHomeComponent } from './empleado-home/empleado-home.component';
import { RRHHHomeComponent } from './rrhh-home/rrhh-home.component';
import { SeguridadHomeComponent } from './seguridad-home/seguridad-home.component';
import { AdministracionHomeComponent } from './administracion-home/administracion-home.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './Items-sidenav/dashboard/dashboard.component';
import { BandejaDocComponent } from './Items-sidenav/bandeja-doc/bandeja-doc.component';
import { EmpleadosComponent } from './Items-sidenav/empleados/empleados.component';
import { DescargasComponent } from './Items-sidenav/descargas/descargas.component';
import { VacantesComponent } from './Items-sidenav/vacantes/vacantes.component';



@NgModule({
  declarations: [
    EmpleadoHomeComponent,
    RRHHHomeComponent,
    SeguridadHomeComponent,
    AdministracionHomeComponent,
    SidebarComponent,
    DashboardComponent,
    BandejaDocComponent,
    EmpleadosComponent,
    DescargasComponent,
    VacantesComponent

    
  
    

  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    FormsModule,
    
    
  ],
  exports: [
    EmpleadoHomeComponent,
    RRHHHomeComponent,
    SeguridadHomeComponent,
    AdministracionHomeComponent,
    SidebarComponent,
    

  ]
})
export class HomePagesModule { }
