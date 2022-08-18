import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map, delay, retry } from "rxjs/operators";


@Component({
  selector: 'app-createleaderboard',
  templateUrl: './createleaderboard.component.html',
  styleUrls: ['./createleaderboard.component.scss']
})
export class CreateleaderboardComponent implements OnInit {

  disabled: boolean = false
  category: string = ''
  title: string = ''

  uid: string | null = localStorage.getItem('u_id')
  token: string | null = localStorage.getItem('token')
  url: any = 'https://administrator.goodyellowco.com/api/u/vendor/create/leaderboard?token='
  dataUrl: string = 'https://administrator.goodyellowco.com/api/u/vendor/leaderboards/'
  leaderboards: any = []
  typeSelected: string;


  constructor(
    private http: HttpClient,
    private router: Router,
  ) {
    this.typeSelected = 'ball-fussion';
  }

  ngOnInit(): void {

    this.getLeaderboards()
  }


  async getLeaderboards() {
    await this.http.get(this.dataUrl + localStorage.getItem('u_id') + '?token=' + localStorage.getItem('token')).pipe(delay(100), retry(3)).toPromise().then(res => {
      this.leaderboards = res
    });
  }

  add_more() {
    this.disabled = true

      const myheader = new HttpHeaders();
      //myheader.set('Access-Control-Allow-Origin', '*');
      myheader.set('Content-Type', 'application/x-www-form-urlencoded');

      const formData = new FormData();
      formData.append('category', this.category)
      formData.append('title', this.title)
      formData.append('user_id', this.uid ?? '')

      this.http.post<any>(this.url + this.token, formData, {
        headers: myheader
      }).subscribe(response => {
         this.disabled = false
        if(response.id) {
         this.getLeaderboards()
         this.title = ''
         this.category = ''
        }
      });
  }

  save() {
    this.router.navigate(['vendor-storefront'])
  }

}
