import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, delay, retry } from "rxjs/operators";

@Component({
  selector: 'app-public-founders',
  templateUrl: './public-founders.component.html',
  styleUrls: ['./public-founders.component.scss']
})
export class PublicFoundersComponent implements OnInit {

  uid: string | null = localStorage.getItem('u_id')
  token: string | null = localStorage.getItem('token')
  dataUrl: string = 'https://administrator.goodyellowco.com/api/u/vendor/founders/'
  dataForBuyerUrl: string = 'https://administrator.goodyellowco.com/api/u/founder/'
  data: any = []

  buyer_seller_id: string | null = null

  constructor(
    private http: HttpClient,
    private router: Router,
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
      this.data = res[0]
    });
  }

  async getDataForBuyer() {
    await this.http.get(this.dataForBuyerUrl + this.buyer_seller_id + '?token=' + localStorage.getItem('token')).pipe(delay(100), retry(3)).toPromise().then((res: any) => {
      this.data = res[0]
    });
  }

}
