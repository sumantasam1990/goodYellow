import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, delay, retry } from "rxjs/operators";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit {

  url: string = 'https://administrator.goodyellowco.com/api/level/four/leaderboard/list/'
  leaderboards: any = []
  name: string | null = ''
  loading: boolean = false

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  async ngOnInit() {
    this.name = this.route.snapshot.paramMap.get('name')
    this.loading = true
    await this.http.get(this.url + this.name).pipe(delay(100), retry(3)).toPromise().then(res => {
      this.loading = false
      this.leaderboards = res
    }).catch(error => {
      this.loading = false
         // work with error
         console.log(error)
         Swal.fire({
          title: error.name,
          text: error.message
         })
     });

  }

}
