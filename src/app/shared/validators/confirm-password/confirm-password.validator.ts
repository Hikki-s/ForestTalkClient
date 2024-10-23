import { AbstractControl, ValidationErrors } from "@angular/forms";

export const confirmPasswordValidator = (
  control: AbstractControl
): ValidationErrors | null => {
  const password = control.parent?.get("password")?.value;
  const confirmPassword = control.value;

  if (password !== confirmPassword) {
    return { passwordsDoNotMatch: true };
  }
  return null;
};
