import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Output() fireIsLoggedIn: EventEmitter<any> = new EventEmitter<any>();

  email: string = ''
  pass: string = ''


  constructor(
    private http: HttpClient,
    private router: Router,
    private auth: AuthServiceService,
  ) { }

  ngOnInit(): void {
  }

  login() {
    this.auth.loginBuyerUser(this.email, this.pass);
  }

}
