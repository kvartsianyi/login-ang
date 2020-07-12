import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {AuthService} from '../../services/auth.service';
import {UserModel} from '../../models/User.model';

@Component({
  selector: 'app-hello-user',
  templateUrl: './hello-user.component.html',
  styleUrls: ['./hello-user.component.css']
})
export class HelloUserComponent implements OnInit {

  user: UserModel;

  constructor(private router: Router, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.authService.getUser().subscribe((user: UserModel) => {
      this.user = user;
    });
  }

  logout() {

    this.authService.logout().subscribe(data => {
      this.authService.deleteTokenPair();
      this.router.navigate(['']);
    }, ({error}) => {
      if (error.message) {
        alert(error.message);
      }
    });

  }
}
