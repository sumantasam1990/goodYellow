import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, delay, retry } from "rxjs/operators";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  url: string = 'https://administrator.goodyellowco.com/api/buyer/placed/order/'
  orders: any = []

  shipped_url: string = 'https://administrator.goodyellowco.com/api/buyer/shippid/order/'
  shipped_orders: any = []

  cancel_url: string = 'https://administrator.goodyellowco.com/api/buyer/cancelled/order/'
  cancelled_orders: any = []

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  async ngOnInit() {
    await this.http.get(this.url + localStorage.getItem('b_u_id')).pipe(delay(250), retry(3)).toPromise().then((res: any) => {
      console.log(res)
      this.orders = res
    })

    await this.http.get(this.shipped_url + localStorage.getItem('b_u_id')).pipe(delay(250), retry(3)).toPromise().then((res: any) => {
      console.log(res)
      this.shipped_orders = res
    })

    await this.http.get(this.cancel_url + localStorage.getItem('b_u_id')).pipe(delay(250), retry(3)).toPromise().then((res: any) => {
      console.log(res)
      this.cancelled_orders = res
    })
  }

}
