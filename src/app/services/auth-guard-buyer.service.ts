import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardBuyerService {

  constructor(
    //public auth: AuthService,
    public router: Router
  ) { }

  canActivate(): boolean {
    if (!localStorage.getItem('b_token')) {
      this.router.navigate(['u/login']);
      return false;
    }
    return true;
  }
}
