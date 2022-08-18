import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, delay, retry } from "rxjs/operators";

@Component({
  selector: 'app-vendor-description',
  templateUrl: './vendor-description.component.html',
  styleUrls: ['./vendor-description.component.scss']
})
export class VendorDescriptionComponent implements OnInit {

  txt: string = ''
  url: any = 'https://administrator.goodyellowco.com/api/u/vendor/signup/brand/info?token='
  dataUrl: any = 'https://administrator.goodyellowco.com/api/u/vendor/brand/description/'
  uid: string | null = localStorage.getItem('u_id')
  token: string | null = localStorage.getItem('token')
  id: string = ''

  constructor(
    private router: Router,
    private http: HttpClient,
  ) { }

  async ngOnInit() {
    await this.http.get(this.dataUrl + localStorage.getItem('u_id') + '?token=' + localStorage.getItem('token')).pipe(delay(100), retry(3)).toPromise().then((res: any) => {
      this.txt = res[0]
      this.id = res[1]
    });
  }

  save() {
    const myheader = new HttpHeaders();
      //myheader.set('Access-Control-Allow-Origin', '*');
      myheader.set('Content-Type', 'application/x-www-form-urlencoded');

      const formData = new FormData();
      formData.append('txt', this.txt)
      formData.append('user_id', this.uid ?? '')
      formData.append('key', 'brand_description')

      this.http.post<any>(this.url + this.token, formData, {
        headers: myheader
      }).subscribe(response => {
        if(response) {
          this.txt = ''
          this.router.navigate(['vendor-storefront'])
        }
      });
  }

}
