import { FormArray, FormControl, FormGroup } from '@angular/forms';
import {getBuyerForm} from './buyer.form';

export function getOrderForm(): FormGroup {
  return new FormGroup({
      buyer: new FormControl(),
      dateTime: new FormControl(),
      productID: new FormControl(),
      address: new FormControl(),
  });
}
