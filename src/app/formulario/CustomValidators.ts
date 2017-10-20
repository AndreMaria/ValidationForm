import { FormControl } from '@angular/forms';

export class CustomValidators {
    static required(control: FormControl): ValidationResult {
        const isBlank = (value: string) => {
            return !value;
        };

        const isString = (value: string) => {
            return (typeof value === 'string');
        };

        return isBlank(control.value) || (isString(control.value) && control.value.trim() === '') ?
            {'required': true} :
            null;
    }

    static apenasLetraNumeroEspaco(control: FormControl): ValidationResult {
        if (control.value) {
            const notAWord = /^[a-zA-Z0-9\sáàâãäÁÀÂÃÄéèêëÉÈÊËíìîïÍÌÎÏóòôõöÓÒÔÕÖúùûüÚÙÛÜçÇÑñ]+$/.test(control.value);
            return !notAWord ? { 'textoInvalido': true } : null;
        }
        return null;
    }

    static justLetters(control: FormControl): ValidationResult {
        if (control.value) {
            const patternStr = control.value.match('[0-9]+');

            if (patternStr) {
                return { 'lettersInvalid': true };
            }
        }
        return null;
    }

    static specialCharacters(control: FormControl): ValidationResult {
        if (control.value) {
            const patternStr = /[^a-zA-Z\sáàâãäÁÀÂÃÄéèêëÉÈÊËíìîïÍÌÎÏóòôõöÓÒÔÕÖúùûüÚÙÛÜçÇÑñ]+/.test(control.value);

            if (patternStr) {
                return { 'specialCharactersInvalido': true };
            }
        }
        return null;
    }
}

interface ValidationResult {
    [key: string]: boolean;
}
