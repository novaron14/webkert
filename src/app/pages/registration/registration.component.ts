import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  @Output() callSelectPage = new EventEmitter<string>();
  form: FormGroup = new FormGroup({
    username: new FormControl(),
    address: new FormControl(),
    email: new FormControl('', [Validators.required, Validators.email, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
    password1: new FormControl('', [Validators.minLength(6), Validators.required]),
    password2: new FormControl('', [Validators.minLength(6), Validators.required]),
  });
error = false;
  registration(): void{
    this.error = false
    if(this.form.valid){
      if (this.form.value.password1 === this.form.value.password2) {
        console.log(this.form.value);
        return;
      }
    }
    this.error = true;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
