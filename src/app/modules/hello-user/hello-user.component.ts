import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {AuthService} from '../../services/auth.service';
import {UserRegisterModel} from '../../models/UserRegister.model';

@Component({
  selector: 'app-hello-user',
  templateUrl: './hello-user.component.html',
  styleUrls: ['./hello-user.component.css']
})
export class HelloUserComponent implements OnInit {

  user: UserRegisterModel;

  constructor(private router: Router, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.user = this.authService.getUser();
  }

  logout() {
    this.router.navigate(['']);
  }
}
