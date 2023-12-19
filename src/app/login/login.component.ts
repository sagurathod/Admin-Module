import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private router:Router) {

  }

  ngOnInit() {
    this.form();
  }

  form() {
    this.loginForm = this.fb.group({
      "email": [],
      "password": []
    })
  }

  save() {
    console.log(this.loginForm.value);
    this.router.navigate(['/dashboard']);
  }
}