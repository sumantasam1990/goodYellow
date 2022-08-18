import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    //public auth: AuthService,
    public router: Router
  ) { }

  canActivate(): boolean {
    if (!localStorage.getItem('token')) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
