import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  @Output() fireIsLoggedIn: EventEmitter<any> = new EventEmitter<any>();

  email: string = ''
  pass: string = ''
  fname: string = ''
  lname: string = ''
  street: string = ''
  city: string = ''
  state: string = ''
  zip: string = ''
  phone: string = '+1 '
  promo: string = ''


  constructor(
    private http: HttpClient,
    private router: Router,
    private auth: AuthServiceService,
  ) { }

  ngOnInit(): void {
  }

  login() {
    this.auth.registerBuyerUser(this.fname, this.lname, this.email, this.pass, this.street, this.city, this.state, this.zip, this.phone, this.promo);
  }

}
