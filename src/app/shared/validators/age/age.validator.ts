import type { AbstractControl, ValidationErrors } from "@angular/forms";
import { TuiDay } from "@taiga-ui/cdk";

export const ageValidator = (
  control: AbstractControl
): ValidationErrors | null => {
  const selectedDate: TuiDay = control.value;
  const today = TuiDay.currentLocal();

  if (selectedDate) {
    const minAgeDate = today.append({ year: -14 });
    const maxAgeDate = today.append({ year: -120 });

    if (selectedDate.dayAfter(minAgeDate)) {
      return { underage: true };
    }

    if (selectedDate.dayBefore(maxAgeDate)) {
      return { overage: true };
    }
  }

  return null;
};
