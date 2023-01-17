import { AbstractControl } from '@angular/forms';

export class MyValidations {
    static isEmpty(control:AbstractControl){
        if(control.value.trim() === ''){
        return {isEmpty:true};
        }
        return null;
    }
    static isDifferentPass(control:AbstractControl){
        if(control.value.trim() === '123'){
        return {isDifferent:true};
        }
        return null;
    }
    static isDifferentUser(control:AbstractControl){
        if(control.value.trim() === 'Juan'){
        return {isDifferent:true};
        }
        return null;
    }
}

    