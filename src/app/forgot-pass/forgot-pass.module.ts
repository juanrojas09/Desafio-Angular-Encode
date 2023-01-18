import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CambioPassComponent } from './cambio-pass/cambio-pass.component';
import { LoginModule } from "../login/login.module";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        CambioPassComponent,
        
    ],
    exports: [
        CambioPassComponent
    ],
    imports: [
        CommonModule,
        LoginModule,
        ReactiveFormsModule
        
    ]
})
export class ForgotPassModule { }
