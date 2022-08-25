import { HttpClient } from '@angular/common/http';
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

  url: string = 'https://administrator.goodyellowco.com/api/buyer/email/verification/check/'
  emailVerify: any



  constructor(
    private router: Router,
    private auth: AuthServiceService,
    private http: HttpClient,
  ) { }

  ngOnInit(): void {

    this.buyerEmailVerificationMessage()

    this.auth.getEmitter().subscribe((obj) => {
      if(obj.token && obj.token != '') {
        this.changeHeader = true
      } else if(obj.buyer_token && obj.buyer_token != '') {
        this.buyerEmailVerificationMessage()
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



  async buyerEmailVerificationMessage() {
    console.log('bal')
    await this.http.get(this.url + localStorage.getItem('b_u_id')).pipe().toPromise().then((res: any) => {

      if(res.stat == 0) {
        this.emailVerify = res.info
      } else {
        this.emailVerify = ''
      }

    }).catch(err => {
      alert(err.message)
    })
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
