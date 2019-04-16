import { AbstractControl } from '@angular/forms';

export function NumericValidator(control: AbstractControl) {
  if (control.value == null || isNaN(control.value)) {
    return { numericError: true };
  }
  return null;
}
