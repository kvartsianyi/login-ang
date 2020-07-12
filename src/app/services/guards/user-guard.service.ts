import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {Observable} from 'rxjs';

import {AuthService} from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuardService implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.authService.getUser().toPromise().then(user => {
      if (!user) {
        this.router.navigate(['login']);

        return false;
      }
      return true;
    });
  }
}
