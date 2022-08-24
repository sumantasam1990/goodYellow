import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLoggedIn: boolean = false
  changeHeader: boolean = false
  changeBuyerHeader: boolean = false
  loggedInBuyerId: string | null = localStorage.getItem('b_u_id') // buyer_id

  constructor(
    private router: Router,
    private auth: AuthServiceService,
  ) { }

  ngOnInit(): void {

    this.auth.getEmitter().subscribe((obj) => {
      if(obj.token && obj.token != '') {
        this.changeHeader = true
      } else if(obj.buyer_token && obj.buyer_token != '') {
        this.changeBuyerHeader = true
      } else {
        this.changeHeader = false
        this.changeBuyerHeader = false
      }
    });

    if(localStorage.getItem('token') && localStorage.getItem('email')) {
      this.changeHeader = true
    } else if(localStorage.getItem('b_token') && localStorage.getItem('b_email')) {
      this.changeBuyerHeader = true
    } else {
      this.changeHeader = false
      this.changeBuyerHeader = false
    }
  }

  signin() {
    this.router.navigate(['login'])
  }

  signout() {
    this.auth.logout();
  }

  signin_buyer() {
    this.router.navigate(['/u/login'])
  }

  signout_buyer() {
    this.auth.logoutBuyer();
  }

}
