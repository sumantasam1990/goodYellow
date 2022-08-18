import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, delay, retry } from "rxjs/operators";

@Component({
  selector: 'app-step9',
  templateUrl: './step9.component.html',
  styleUrls: ['./step9.component.scss']
})
export class Step9Component implements OnInit {

  website_txt: string = ''
  email_txt: string = ''
  social_txt: string = ''
  url: any = 'https://administrator.goodyellowco.com/api/u/vendor/signup/brand/links?token='
  dataUrl: any = 'https://administrator.goodyellowco.com/api/u/vendor/brand/links/'
  uid: string | null = localStorage.getItem('u_id')
  token: string | null = localStorage.getItem('token')
  storefront: string | null = ''

  constructor(
    private router: Router,
    private http: HttpClient,
    private route: ActivatedRoute,
  ) { }

  async ngOnInit() {
    this.storefront = this.route.snapshot.paramMap.get('storefront')
    await this.http.get(this.dataUrl + localStorage.getItem('u_id') + '?token=' + localStorage.getItem('token')).pipe(delay(100), retry(3)).toPromise().then((res: any) => {
      this.website_txt = res.website
      this.email_txt = res.email
      this.social_txt = res.social
    });
  }

  next() {
    const myheader = new HttpHeaders();
      //myheader.set('Access-Control-Allow-Origin', '*');
      myheader.set('Content-Type', 'application/x-www-form-urlencoded');

      const formData = new FormData();
      formData.append('website', this.website_txt)
      formData.append('email', this.email_txt)
      formData.append('social', this.social_txt)
      formData.append('user_id', this.uid ?? '')

      this.http.post<any>(this.url + this.token, formData, {
        headers: myheader
      }).subscribe(response => {
        if(response) {
          this.website_txt = ''
          this.email_txt = ''
          this.social_txt = ''
          localStorage.setItem('goodyellow_step', '9')
          this.router.navigate(['vendor-signup-faqs'])
        }
      });
  }

  save() {
    const myheader = new HttpHeaders();
      //myheader.set('Access-Control-Allow-Origin', '*');
      myheader.set('Content-Type', 'application/x-www-form-urlencoded');

      const formData = new FormData();
      formData.append('website', this.website_txt)
      formData.append('email', this.email_txt)
      formData.append('social', this.social_txt)
      formData.append('user_id', this.uid ?? '')

      this.http.post<any>(this.url + this.token, formData, {
        headers: myheader
      }).subscribe(response => {
        if(response) {
          this.website_txt = ''
          this.email_txt = ''
          this.social_txt = ''
          //localStorage.setItem('goodyellow_step', '9')
          this.router.navigate(['vendor-storefront'])
        }
      });
  }
}
