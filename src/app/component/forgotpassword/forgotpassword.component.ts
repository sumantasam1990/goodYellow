import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, delay, retry } from "rxjs/operators";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {

  disabled: boolean = false
  email: string = ''
  url: any = 'https://administrator.goodyellowco.com/api/vendor/email/forgot/password/generator'

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }

  async ngOnInit() {
  }

  save() {
    this.disabled = true
      const myheader = new HttpHeaders();
      //myheader.set('Access-Control-Allow-Origin', '*');
      myheader.set('Content-Type', 'application/x-www-form-urlencoded');

      const formData = new FormData();
      formData.append('email', this.email)

      this.http.post<any>(this.url, formData, {
        headers: myheader
      }).subscribe(response => {
         this.disabled = false
        if(response) {
          this.email = ''
          Swal.fire({

             text:   response.msg,
             icon: 'info'
         }).then(r => {
          this.router.navigate(['login'])
         });


        }
      });
  }

}
