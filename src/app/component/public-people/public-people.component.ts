import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map, delay, retry } from "rxjs/operators";

@Component({
  selector: 'app-public-people',
  templateUrl: './public-people.component.html',
  styleUrls: ['./public-people.component.scss']
})
export class PublicPeopleComponent implements OnInit {

  uid: string | null = localStorage.getItem('u_id')
  token: string | null = localStorage.getItem('token')
  dataUrl: string = 'https://administrator.goodyellowco.com/api/u/vendor/people/story/'
  data: any = []

  constructor(
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    this.getData()
  }

  async getData() {
    await this.http.get(this.dataUrl + localStorage.getItem('u_id') + '?token=' + localStorage.getItem('token')).pipe(delay(100), retry(3)).toPromise().then((res: any) => {
      this.data = res
    });
  }

}
