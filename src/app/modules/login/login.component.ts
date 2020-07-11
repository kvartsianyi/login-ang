import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {AuthService} from '../../services/auth.service';
import {UserLoginModel} from '../../models/UserLogin.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  isFormValid = true;

  constructor(private router: Router, private formBuilder: FormBuilder, private authService: AuthService) {
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

  formSubmit(event) {
    event.preventDefault();

    this.isFormValid = !this.loginForm.invalid;

    if (!this.isFormValid) {
      return;
    }

    const {selectedLanguage, login, password} = this.loginForm.value;
    const userData = new UserLoginModel(selectedLanguage, login, password);
    const isUserPresent = this.authService.login(userData);

    if (!isUserPresent) {
      this.isFormValid = false;

      return;
    }

    this.router.navigate(['user']);
  }
}
