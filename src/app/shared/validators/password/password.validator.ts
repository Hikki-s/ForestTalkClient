import type { AbstractControl, ValidationErrors } from "@angular/forms";

export const passwordValidator = (
  control: AbstractControl
): ValidationErrors | null => {
  const passwordField = control.value;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=[\]{}|\\:;"'<>,.?/~`])[A-Za-z\d!@#$%^&*()_\-+=[\]{}|\\:;"'<>,.?/~`]{8,}$/;
  if (passwordField && !passwordRegex.test(passwordField)) {
    return { invalidPassword: true };
  }
  return null;
};
