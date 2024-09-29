import { Injectable } from '@angular/core';
import { Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService, routes } from '../../core.index';

@Injectable({
  providedIn: 'root',
})
export class LoggedInGuard {
  constructor(private router: Router,private auth: AuthService) {}

  canActivate(
  
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (localStorage.getItem('access_token')) {
      const userGroupId = this.auth.getUserGroupId();
      let redirect  =  this.auth.getUserGroup(userGroupId);
      this.router.navigate([redirect]);
      return false;
    } else {
      return true;
    }
  }
}
