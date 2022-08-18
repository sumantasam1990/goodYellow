import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, delay, retry } from "rxjs/operators";

@Component({
  selector: 'app-step6',
  templateUrl: './step6.component.html',
  styleUrls: ['./step6.component.scss']
})
export class Step6Component implements OnInit {

  txt: string = ''
  url: any = 'https://administrator.goodyellowco.com/api/u/vendor/signup/brand/info?token='
  dataUrl: any = 'https://administrator.goodyellowco.com/api/u/vendor/people/story/'
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
      this.txt = res
    });
  }

  next() {
    const myheader = new HttpHeaders();
      //myheader.set('Access-Control-Allow-Origin', '*');
      myheader.set('Content-Type', 'application/x-www-form-urlencoded');

      const formData = new FormData();
      formData.append('txt', this.txt)
      formData.append('user_id', this.uid ?? '')
      formData.append('key', 'people_story')

      this.http.post<any>(this.url + this.token, formData, {
        headers: myheader
      }).subscribe(response => {
        if(response) {
          this.txt = ''
          localStorage.setItem('goodyellow_step', '6')
          this.router.navigate(['vendor-signup-story'])
        }
      });

  }

  save() {
    const myheader = new HttpHeaders();
      //myheader.set('Access-Control-Allow-Origin', '*');
      myheader.set('Content-Type', 'application/x-www-form-urlencoded');

      const formData = new FormData();
      formData.append('txt', this.txt)
      formData.append('user_id', this.uid ?? '')
      formData.append('key', 'people_story')

      this.http.post<any>(this.url + this.token, formData, {
        headers: myheader
      }).subscribe(response => {
        if(response) {
          this.txt = ''
          //localStorage.setItem('goodyellow_step', '6')
          this.router.navigate(['vendor-storefront'])
        }
      });
  }

}
