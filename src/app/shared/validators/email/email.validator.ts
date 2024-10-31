import type { ValidatorFn } from "@angular/forms";
import { type AbstractControl, type ValidationErrors } from "@angular/forms";

export const emailValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const emailValue = control.value;
  const emailRegexp = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  if (emailValue && !emailRegexp.test(emailValue)) {
    return { invalidEmail: true };
  }
  return null;
};
