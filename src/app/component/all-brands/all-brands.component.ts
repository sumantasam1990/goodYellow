import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, delay, retry } from "rxjs/operators";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-all-brands',
  templateUrl: './all-brands.component.html',
  styleUrls: ['./all-brands.component.scss']
})
export class AllBrandsComponent implements OnInit {

  url: string = 'https://administrator.goodyellowco.com/api/all/brands'
  slug: string | null = ''
  brands: any = []
  src: string = ''
  arc: boolean = false
  loadingg: boolean = true

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

   ngOnInit() {
     this.getData()

  }

  async getData() {
    this.loadingg = true
    await this.http.get(this.url).pipe(delay(500), retry(6)).toPromise().then(res => {
      this.loadingg = false
      this.brands = res
    }).catch(error => {
      this.loadingg = false
         // work with error
         Swal.fire({
          title: error.name,
          text: error.message
         })
     });
  }

  updateUrl(e: Event) {
    //(e.target as HTMLImageElement).style.display = 'none';
    this.arc = true
    this.src = '../../../assets/imgs/default_gy.webp';
  }



  // private_popup() {
  //   Swal.fire({
  //     title: 'This is a private Storefront.',
  //     text: 'Brands can decide to make their Storefront private because they want more time to make it perfect while still being able to share their Storefront URL with their existing customers. Sharing their Storefront URL allows their existing customers to checkout from the Storefront and enables the Brands to make sales on Good Yellow and climb the Leaderboards.',
  //     icon: 'info'
  //   })
  // }

}
