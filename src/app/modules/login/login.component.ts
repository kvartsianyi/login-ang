import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder) {
    this.loginForm = formBuilder.group({
      selectLanguage: ['English'],
      login: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  ngOnInit(): void {
  }

  toRegister(event) {
    event.preventDefault();

    this.router.navigate(['register']);
  }

  formSubmit(event){
    event.preventDefault();
    console.log(this.loginForm);

    this.router.navigate(['user']);
  }
}
