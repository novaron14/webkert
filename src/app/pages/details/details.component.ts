import { getAddressForm } from 'src/app/shared/forms/address.form';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { getPersonForm } from 'src/app/shared/forms/person.form';
import { PRODUCTS } from 'src/app/shared/database/product.database';
import {Product} from 'src/app/shared/models/product.model';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  form: FormGroup | null = null;
  @Output() callSelectPage = new EventEmitter<string>();
  @Input() getProduct? : Product;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.form = getPersonForm();
    const idFormArray = this.form.get('identifier') as FormArray;
    (idFormArray.get([1]) as FormGroup).controls.value.setValue('vmi@vmi.com');
  }

  get getAddress(): FormArray {
    return this.form?.get('address') as FormArray;
  }

  addAddress(): void {
    const idFormArray = this.form?.get('address') as FormArray;
    idFormArray.push(getAddressForm());
  }

  removeAddress(index: number): void {
    const formArray = this.form?.get('address') as FormArray;
    formArray.removeAt(index);
  }

  log(): void {
    const dialogRef = this.dialog.open(DialogComponent, {})
  }

}
