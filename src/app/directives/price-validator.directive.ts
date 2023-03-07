import { Directive } from '@angular/core';
import { FormControl, NG_VALIDATORS, ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[appPriceValidator]',
  providers: [
    {provide: NG_VALIDATORS, useExisting: PriceValidatorDirective, multi: true}
  ]
})
export class PriceValidatorDirective {

  validate(control: FormControl): null | ValidationErrors {

    if (control.value <= 0){
      return { 'price': 0 };
    }

    return null;
   }

}
