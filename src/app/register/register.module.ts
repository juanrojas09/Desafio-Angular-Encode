import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistroComponent } from './registro/registro.component';
import { LoginModule } from '../login/login.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        RegistroComponent
    ],
    exports: [
        RegistroComponent,
    ],
    imports: [
        CommonModule,
        LoginModule,
        FormsModule,
        ReactiveFormsModule,
    ]
})
export class RegisterModule { }
