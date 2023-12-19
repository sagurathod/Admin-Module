import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  signUpForm!: FormGroup;

  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
    this.form();
  }

  form() {
    this.signUpForm = this.fb.group({
      "name": [],
      "mobile": [],
      "email": [],
      "password": []
    })
  }

  save() {
    console.log(this.signUpForm.value)
  }
}
