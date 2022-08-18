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

  constructor(
    private router: Router,
    private auth: AuthServiceService,
  ) { }

  ngOnInit(): void {

    this.auth.getEmitter().subscribe((obj) => {
      if(obj.token && obj.token != '') {
        this.changeHeader = true
      } else {
        this.changeHeader = false
      }
    });

    if(localStorage.getItem('token') && localStorage.getItem('email')) {
      this.changeHeader = true
    } else {
      this.changeHeader = false
    }
  }

  signin() {
    this.router.navigate(['login'])
  }

  signout() {
    this.auth.logout();
  }

}
