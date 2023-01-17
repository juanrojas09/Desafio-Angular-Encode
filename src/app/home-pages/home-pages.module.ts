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
import { DashboardComponent } from './dashboard/dashboard.component';
import { BandejaDocComponent } from './Items-sidenav/RRHH/bandeja-doc/bandeja-doc.component';
import { EmpleadosComponent } from './Items-sidenav/RRHH/empleados/empleados.component';

import { VacantesComponent } from './Items-sidenav/RRHH/vacantes/vacantes.component';
import { DescargasComponent } from './Items-sidenav/RRHH/descargas/descargas.component';
import { BandejaDocsEmpleadoComponent } from './Items-sidenav/EMPLEADO/bandeja-docs-empleado/bandeja-docs-empleado.component';
import { DashboardEmpleadoComponent } from './Items-sidenav/EMPLEADO/dashboard-empleado/dashboard-empleado.component';
import { CertificadosEmpleadosComponent } from './Items-sidenav/EMPLEADO/certificados-empleados/certificados-empleados.component';
import { PermisosLicenciasComponent } from './Items-sidenav/EMPLEADO/permisos-licencias/permisos-licencias.component';
import { RegistrarAsistenciasComponent } from './Items-sidenav/EMPLEADO/registrar-asistencias/registrar-asistencias.component';
import { DashboardAdminComponent } from './Items-sidenav/ADMINISTRACION/dashboard-admin/dashboard-admin.component';
import { DefinicionDocumentosComponent } from './Items-sidenav/ADMINISTRACION/definicion-documentos/definicion-documentos.component';
import { EmpresaComponent } from './Items-sidenav/ADMINISTRACION/empresa/empresa.component';
import { SolicitudesComponent } from './Items-sidenav/ADMINISTRACION/solicitudes/solicitudes.component';
import { SucursalesComponent } from './Items-sidenav/ADMINISTRACION/sucursales/sucursales.component';
import { DashboardSeguridadComponent } from './Items-sidenav/SEGURIDAD/dashboard-seguridad/dashboard-seguridad.component';



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
    VacantesComponent,
    DashboardEmpleadoComponent,
    BandejaDocsEmpleadoComponent,
    CertificadosEmpleadosComponent,
    PermisosLicenciasComponent,
    RegistrarAsistenciasComponent,
    DashboardAdminComponent,
    DefinicionDocumentosComponent,
    EmpresaComponent,
    SolicitudesComponent,
    SucursalesComponent,
    DashboardSeguridadComponent


    
  
    

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
