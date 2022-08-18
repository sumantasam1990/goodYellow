import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map, delay, retry } from "rxjs/operators";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-connect-stripe',
  templateUrl: './connect-stripe.component.html',
  styleUrls: ['./connect-stripe.component.scss']
})
export class ConnectStripeComponent implements OnInit {

  url: any = 'https://administrator.goodyellowco.com/api/u/vendor/stripe/credentials?token='
  //url: string = 'https://administrator.goodyellowco.com/api/u/setup/stripe/vendor?token='
  dataUrl: string = 'https://administrator.goodyellowco.com/api/u/setup/stripe/vendor/emailid/'
  stripe_url: string = ''
  uid: string | null = localStorage.getItem('u_id')
  token: string | null = localStorage.getItem('token')
  disabled: boolean = false
  email: string = ''
  api: string = ''
  secret: string = ''

  constructor(
    private router: Router,
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    this.getEmail()
  }

  async getEmail() {
    await this.http.get(this.dataUrl + localStorage.getItem('u_id') + '?token=' + localStorage.getItem('token')).pipe(delay(100), retry(3)).toPromise().then((res: any) => {
      console.log(res)
      this.api = res.data.api_key
      this.secret = res.data.secret_key
    });
  }

  connect() {
    this.disabled = true
    const myheader = new HttpHeaders();
      //myheader.set('Access-Control-Allow-Origin', '*');
      myheader.set('Content-Type', 'application/x-www-form-urlencoded');

      const formData = new FormData();
      formData.append('user_id', this.uid ?? '')
      formData.append('api_key', this.api)
      formData.append('secret_key', this.secret)

      this.http.post<any>(this.url + this.token, formData, {
        headers: myheader
      }).subscribe(response => {

        if(response.id) {
          //this.stripe_url = response
          this.disabled = false
          localStorage.removeItem('goodyellow_step')
          Swal.fire({
            title: 'Hurray!!',
            text: 'Your Stripe connected successfully.',
            icon: 'success'
          })
        } else {
          Swal.fire({
            text: response.msg,
            icon: 'error'
          })
        }
      });
  }

  finish() {
    this.router.navigate(['vendor-storefront'])
    localStorage.removeItem('goodyellow_step')
  }

}
