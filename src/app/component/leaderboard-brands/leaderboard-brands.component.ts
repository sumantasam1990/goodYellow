import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, delay, retry } from "rxjs/operators";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-leaderboard-brands',
  templateUrl: './leaderboard-brands.component.html',
  styleUrls: ['./leaderboard-brands.component.scss']
})
export class LeaderboardBrandsComponent implements OnInit {

  url: string = 'https://administrator.goodyellowco.com/api/leaderboard/brands/list/'
  discount_url: string = 'https://administrator.goodyellowco.com/api/discount/leaderboards/'
  slug: string | null = ''
  brands: any = []

  min: string | null = ''
  max: string | null = ''

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  async ngOnInit() {
    this.slug = this.route.snapshot.paramMap.get('slug')

    this.min = this.route.snapshot.paramMap.get('min')
    this.max = this.route.snapshot.paramMap.get('max')

    if(this.min && this.max) {
      await this.http.get(this.discount_url + this.slug + '/' + this.min + '/' + this.max).pipe(delay(200), retry(3)).toPromise().then(res => {
        this.brands = res
      }).catch(error => {
          // work with error
          Swal.fire({
            title: error.name,
            text: error.message
          })
      });
    } else {
        await this.http.get(this.url + this.slug).pipe(delay(200), retry(3)).toPromise().then(res => {
        this.brands = res
      }).catch(error => {
          // work with error
          Swal.fire({
            title: error.name,
            text: error.message
          })
      });
    }



  }

  private_popup() {
    Swal.fire({
      title: 'This is a private Storefront.',
      text: 'Brands can decide to make their Storefront private because they want more time to make it perfect while still being able to share their Storefront URL with their existing customers. Sharing their Storefront URL allows their existing customers to checkout from the Storefront and enables the Brands to make sales on Good Yellow and climb the Leaderboards.',
      icon: 'info'
    })
  }

}
