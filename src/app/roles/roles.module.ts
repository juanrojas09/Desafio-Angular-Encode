import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RolesComponent } from './roles/roles.component';
import { LoginModule } from "../login/login.module";



@NgModule({
    declarations: [
        RolesComponent
    ],
    exports: [
        RolesComponent
    ],
    imports: [
        CommonModule,
        LoginModule
    ]
})
export class RolesModule { }
