import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginOrNotGuardService implements CanActivate {

  constructor(
    private router: Router,
  ) { }

  canActivate(): boolean {
    if (localStorage.getItem('b_token')) {
      this.router.navigate(['/u']);
      return false;
    }
    return true;
  }
}
