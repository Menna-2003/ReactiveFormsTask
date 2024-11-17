import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function ConditionalPasswordValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {

        const weakRegex = /^(?=.*[a-zA-Z]{2,})(?=.*\d).{8,}$/;
        const mediumRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?!.*[a-zA-Z]{2,}).{8,}$/;
        const strongRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+[\]{};:,.<>?/|`~]).{8,}$/;

        const value = control.value;

        if (strongRegex.test(value)) {
            console.log("Strong");
            return null;
        } else if (mediumRegex.test(value)) {
            console.log("Medium");
            return { mediumPassword: true };
        } else if (weakRegex.test(value)) {
            console.log("Weak");
            return { weakPassword: true };
        } else {
            console.log("Invalid");
            return { InvalidPassword: true };
        }

    };
}