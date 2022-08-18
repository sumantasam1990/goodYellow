import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, delay, retry } from "rxjs/operators";

@Component({
  selector: 'app-step10',
  templateUrl: './step10.component.html',
  styleUrls: ['./step10.component.scss']
})
export class Step10Component implements OnInit {

  question: string = ''
  answer: string = ''
  url: any = 'https://administrator.goodyellowco.com/api/u/vendor/signup/brand/faqs?token='
  uid: string | null = localStorage.getItem('u_id')
  token: string | null = localStorage.getItem('token')
  dataUrl: any = 'https://administrator.goodyellowco.com/api/u/vendor/brand/faq/'
  faqs: any = []
  storefront: string | null = ''

  constructor(
    private router: Router,
    private http: HttpClient,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.storefront = this.route.snapshot.paramMap.get('storefront')
    this.getFaqs()
  }

  async getFaqs() {
    await this.http.get(this.dataUrl + localStorage.getItem('u_id') + '?token=' + localStorage.getItem('token')).pipe(delay(100), retry(3)).toPromise().then(res => {
      this.faqs = res
    });
  }

  add_more() {
    const myheader = new HttpHeaders();
      //myheader.set('Access-Control-Allow-Origin', '*');
      myheader.set('Content-Type', 'application/x-www-form-urlencoded');

      const formData = new FormData();
      formData.append('question', this.question)
      formData.append('answer', this.answer)
      formData.append('user_id', this.uid ?? '')

      this.http.post<any>(this.url + this.token, formData, {
        headers: myheader
      }).subscribe(response => {
        if(response) {
          this.question = ''
          this.answer = ''
          this.getFaqs()
        }
      });
  }

  next() {
    localStorage.setItem('goodyellow_step', '10')
    this.router.navigate(['vendor-connect-stripe'])
  }

}
