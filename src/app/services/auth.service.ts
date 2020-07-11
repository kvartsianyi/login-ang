import {Injectable} from '@angular/core';

import {UserRegisterModel} from '../models/UserRegister.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {
  }

  register(user: UserRegisterModel) {
    let users = JSON.parse(localStorage.getItem('users'));

    if (!users) {
      localStorage.setItem('users', JSON.stringify([]));

      users = [];
    }

    users.push(user);

    localStorage.setItem('users', JSON.stringify(users));
  }
}
