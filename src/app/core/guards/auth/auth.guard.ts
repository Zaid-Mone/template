import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService, routes } from '../../core.index';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router,private auth: AuthService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>  
    | boolean
    | UrlTree {
      const requiredGroupId = route.data['requiredGroupId'];
      const userGroupId = this.auth.getUserGroupId();
      const token =localStorage.getItem('access_token');

      if (token && !this.auth.isTokenExpired(token)) {
        if (userGroupId === requiredGroupId) {
          return true; 
        } else {
          // here i must redirect the user to his module
          let redirect= this.auth.getUserGroup(userGroupId);
          this.router.navigate([redirect]); 
          return false;
        }
      } else {
        // token is missing or expired
        localStorage.removeItem('access_token'); 
        this.router.navigate(['/Auth/login']);
        return false;
      }

  }
}
