import type {
  AbstractControl,
  ValidationErrors,
  ValidatorFn,
} from "@angular/forms";

export const confirmPasswordValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const password = control.get("password")?.value;
  const confirmPassword = control.get("confirmPassword")?.value;

  if (!confirmPassword) {
    return null;
  }

  return password === confirmPassword ? null : { passwordsDoNotMatch: true };
};
