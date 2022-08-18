import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, delay, retry } from "rxjs/operators";

@Component({
  selector: 'app-leaderboards',
  templateUrl: './leaderboards.component.html',
  styleUrls: ['./leaderboards.component.scss']
})
export class LeaderboardsComponent implements OnInit {

  uid: string | null = localStorage.getItem('u_id')
  token: string | null = localStorage.getItem('token')
  url: string = 'https://administrator.goodyellowco.com/api/u/vendor/leaderboards/'
  leaderboards: any = []
  slug: string | null = ''

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  async ngOnInit() {
    this.slug = this.route.snapshot.paramMap.get('slug')

    await this.http.get(this.url + this.slug + '?token=' + localStorage.getItem('token')).pipe(delay(100), retry(3)).toPromise().then(res => {
      this.leaderboards = res
      console.log(res)
    });

  }



}
