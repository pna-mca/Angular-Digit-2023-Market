import { Directive } from '@angular/core';
import { FormControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: '[appPriceValidator]',
  providers: [
    {provide: NG_VALIDATORS, useExisting: PriceValidatorDirective, multi: true}
  ]
})
export class PriceValidatorDirective {

  validate(control: FormControl) { }

}
