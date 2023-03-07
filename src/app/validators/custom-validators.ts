import { FormControl, ValidationErrors } from "@angular/forms";

export class CustomValidators {

  public static priceValidator(control: FormControl): null | ValidationErrors {
    console.log('called validator');

    if (control.value === null || control.valid === undefined) {
      return null;
    }

    if (control.value <= 0){
      return { 'price': 0 };
    }

    return null;
  }
}
