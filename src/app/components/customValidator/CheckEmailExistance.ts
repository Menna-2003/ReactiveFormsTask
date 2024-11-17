
import { ValidatorFn, AbstractControl, ValidationErrors } from "@angular/forms";

export function CheckEmailExistance(existEmails: string[]): ValidatorFn {

    return (control: AbstractControl): ValidationErrors | null => {
        
        let emailValue = control.value;
        let validationError = { 'ExistEmail': { 'value': emailValue } }

        if (emailValue.length == 0) return null;


        let foundEmail = existEmails.find((e) => {
            return e == emailValue;
        });

        return foundEmail ? validationError : null;

    }
}