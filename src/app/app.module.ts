import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RolesModule } from './roles/roles.module';
import { AppRoutingModule } from './app-routing.module';
import { HomePagesModule } from './home-pages/home-pages.module';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LoginModule,
    BrowserAnimationsModule,
    RolesModule,
    AppRoutingModule,
    HomePagesModule,
    MatSidenavModule,
    MatListModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
