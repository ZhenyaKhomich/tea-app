import {AbstractControl, ValidationErrors} from '@angular/forms';

export class ValidatorCustom {
  static validatorPhone(control: AbstractControl): ValidationErrors | null {
    const value: string = control.value || '';

    const validFormat = /^(\+)?[0-9]*$/.test(value);
    if (!validFormat) {
      return { phoneValidation: true };
    }

    const digitsOnly = value.replace(/\D/g, '');
    if (digitsOnly.length !== 11 && digitsOnly.length !== 0) {
      return {phoneValidation: true};
    }
    return null;
  }
}
