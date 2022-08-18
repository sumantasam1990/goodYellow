import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';


@Component({
  selector: 'app-create-vendor',
  templateUrl: './create-vendor.component.html',
  styleUrls: ['./create-vendor.component.scss']
})
export class CreateVendorComponent implements OnInit {

  @Output() fireIsLoggedIn: EventEmitter<any> = new EventEmitter<any>();

  public log = { fname: '', lname: '', email: '', company: '', pass: '', c_pass: '' };
  url: string = 'https://administrator.goodyellowco.com/api/vendor/signup'
  msg_text: string = ''

  constructor(
    private http: HttpClient,
    private router: Router,
    private auth: AuthServiceService,
  ) { }

  ngOnInit(): void {
    if(localStorage.getItem('token')) {
      this.router.navigate(['vendor-signup-create-leaderboard'])
    }
  }

  signup() {
    if(this.log.fname == '' || this.log.fname == ' ') {
      alert('Please enter founder first name')
    }

    else if(this.log.lname == '' || this.log.lname == ' ') {
      alert('Please enter founder last name')
    }

    else if(this.log.company == '' || this.log.company == ' ') {
      alert('Please enter company name')
    }

    else if(this.log.email == '' || this.log.email == ' ') {
      alert('Please enter your email')
    }

    else if(this.log.pass == '' || this.log.pass == ' ') {
      alert('Please enter password')
    }

    else if(this.log.pass != this.log.c_pass) {
      alert('Your password and confirm password is wrong')
    }

    else {
      this.msg_text = '⏳ Please wait...<br> we are sending a verification email to your registered Email ID.'

      this.auth.registerUser(this.log.fname, this.log.lname,this.log.email, this.log.c_pass, this.log.company)

      //this.msg_text = ''

      //this.msg_text = ''
    }



  }

}
