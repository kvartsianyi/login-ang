import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';

import {API_BASE_URL} from '../config';
import {HeadersEnum} from '../constants';
import {UserLoginModel} from '../models/UserLogin.model';
import {UserRegisterModel} from '../models/UserRegister.model';
import {TokenPairModel} from '../models/TokenPair.model';
import {UserModel} from '../models/User.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: UserRegisterModel;

  constructor(private http: HttpClient, private router: Router) {
  }

  register(user: UserRegisterModel): Observable<any> {
    return this.http.post(
      `${API_BASE_URL}/users`,
      {...user}
    );
  }

  login(userData: UserLoginModel): Observable<any> {
    return this.http.post(
      `${API_BASE_URL}/auth/login`,
      userData
    );
  }

  logout(): Observable<any> {
    const {accessToken} = this.getTokenPair();
    const headers = new HttpHeaders().set(HeadersEnum.AUTHORIZATION, accessToken);

    return this.http.post(
      `${API_BASE_URL}/auth/logout`,
      {}, {headers}
    );
  }

  getUser(): Observable<UserModel> {
    const {accessToken} = this.getTokenPair();
    const headers = new HttpHeaders().set(HeadersEnum.AUTHORIZATION, accessToken);

    return this.http.get<UserModel>(
      `${API_BASE_URL}/users/user`, {headers}
    );
  }

  setTokenPair(tokenPair: TokenPairModel) {
    const {accessToken, refreshToken} = tokenPair;

    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
  }

  getTokenPair(): TokenPairModel {
    const accessToken = localStorage.getItem('accessToken');
    const refreshToken = localStorage.getItem('refreshToken');

    if (!accessToken || !refreshToken) {
      this.router.navigate(['login']);
      return;
    }

    return {accessToken, refreshToken};
  }

  deleteTokenPair() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
  }
}
