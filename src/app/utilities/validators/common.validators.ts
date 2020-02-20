import { FormControl, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { Subscription } from 'rxjs';
export class CommonValidator {

    static email(control: FormControl): { [s: string]: boolean } {

        let EMAIL_REGEXP = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (control.value && control.value !== '' && (control.value.length <= 5 || !EMAIL_REGEXP.test(control.value))) {
            return { invalid: true };
        }
    }

 

      public static strongPassword() {
        return (control: FormControl): ValidationErrors => {
          const regexp = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");;
          if (control.value && !regexp.test(control.value)) {
            return { strongPass: 'Password must contain at least 8 characters, one lowercase letter, one uppercase letter, one numeric digit, and one special character.' };
          }
          return null;
        };
      }
}