import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {AuthService} from '../../services/auth.service';
import {UserRegisterModel} from '../../models/UserRegister.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  isPasswordsEqual = true;
  isFormValid = true;

  constructor(private router: Router, private formBuilder: FormBuilder, private authService: AuthService) {
    this.registerForm = formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      login: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      passwordRepeat: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  ngOnInit(): void {
  }

  toLogin(event) {
    event.preventDefault();

    this.router.navigate(['login']);
  }

  register(event) {
    event.preventDefault();

    this.isFormValid = !this.registerForm.invalid;

    if (!this.isFormValid) {
      return;
    }

    const {email, login, password, passwordRepeat} = this.registerForm.value;

    if (password !== passwordRepeat) {
      this.isPasswordsEqual = false;

      return;
    }

    const userData = new UserRegisterModel(email, login, password);

    this.authService.register(userData);
    this.router.navigate(['login']);
  }

}
