import {Injectable} from '@angular/core';

import {UserRegisterModel} from '../models/UserRegister.model';
import {UserLoginModel} from '../models/UserLogin.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: UserRegisterModel;

  constructor() {
  }

  register(user: UserRegisterModel): void {
    let users = JSON.parse(localStorage.getItem('users'));

    if (!users) {
      localStorage.setItem('users', JSON.stringify([]));

      users = [];
    }

    users.push(user);

    localStorage.setItem('users', JSON.stringify(users));
  }

  login(userData: UserLoginModel): boolean {
    const users: [UserRegisterModel] = JSON.parse(localStorage.getItem('users'));
    const userIndex = users.findIndex(user => user.login === userData.login && user.password === userData.password);

    if (userIndex !== -1) {
      this.user = users[userIndex];
    }

    return userIndex !== -1;
  }

  getUser(): UserRegisterModel {
    return this.user;
  }
}
