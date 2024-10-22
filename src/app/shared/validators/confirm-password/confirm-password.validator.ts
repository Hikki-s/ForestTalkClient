import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export const confirmPasswordValidator = (
  passwordControlName: string
): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.parent) {
      return null;
    }
    const password = control.parent.get(passwordControlName)?.value;
    const passwordRepeat = control.value;

    if (password !== passwordRepeat) {
      return { passwordsDoNotMatch: true };
    }
    return null;
  };
};
