import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, delay, retry } from "rxjs/operators";

@Component({
  selector: 'app-public-story',
  templateUrl: './public-story.component.html',
  styleUrls: ['./public-story.component.scss']
})
export class PublicStoryComponent implements OnInit {

  uid: string | null = localStorage.getItem('u_id')
  token: string | null = localStorage.getItem('token')
  dataUrl: string = 'https://administrator.goodyellowco.com/api/u/vendor/brand/story/'
  data: any = []

  buyer_seller_id: string | null = null
  dataForBuyerUrl: string = 'https://administrator.goodyellowco.com/api/u/brand/story/'

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
  ) { }

  async ngOnInit() {
    this.buyer_seller_id = this.route.snapshot.paramMap.get('uid')

    if(this.buyer_seller_id != null) {
      await this.getDataForBuyer()
    } else {
      await this.getData()
    }


  }

  async getData() {
    await this.http.get(this.dataUrl + localStorage.getItem('u_id') + '?token=' + localStorage.getItem('token')).pipe(delay(100), retry(3)).toPromise().then((res: any) => {
      this.data = res
    });
  }

  async getDataForBuyer() {
    await this.http.get(this.dataForBuyerUrl + this.buyer_seller_id + '?token=' + localStorage.getItem('token')).pipe(delay(100), retry(3)).toPromise().then((res: any) => {

      this.data = res
    });
  }

}
