import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map, delay, retry } from "rxjs/operators";

@Component({
  selector: 'app-subscriptions-credits',
  templateUrl: './subscriptions-credits.component.html',
  styleUrls: ['./subscriptions-credits.component.scss']
})
export class SubscriptionsCreditsComponent implements OnInit {

  url: string = 'https://administrator.goodyellowco.com/api/credits/left/'
  data: any = []

  constructor(
    private router: Router,
    private http: HttpClient,
  ) { }

  async ngOnInit() {
    await this.http.get(this.url + localStorage.getItem('b_u_id')).pipe(delay(100), retry(3)).toPromise().then(res => {
      this.data = res
    });
  }

}
