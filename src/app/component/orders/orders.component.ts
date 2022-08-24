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

  url: string = 'https://administrator.goodyellowco.com/api/seller/placed/order/'
  orders: any = []

  shipped_url: string = 'https://administrator.goodyellowco.com/api/seller/shippid/order/'
  shipped_orders: any = []

  cancel_url: string = 'https://administrator.goodyellowco.com/api/seller/cancelled/order/'
  cancelled_orders: any = []

  orderChangeUrl: string = 'https://administrator.goodyellowco.com/api/seller/order/status/change/'
  order_status: string = ''

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  async ngOnInit() {
    await this.getOrders()
  }

  async getOrders() {
    await this.http.get(this.url + localStorage.getItem('u_id')).pipe(delay(250), retry(3)).toPromise().then((res: any) => {

      this.orders = res
    })

    await this.http.get(this.shipped_url + localStorage.getItem('u_id')).pipe(delay(250), retry(3)).toPromise().then((res: any) => {

      this.shipped_orders = res
    })

    await this.http.get(this.cancel_url + localStorage.getItem('u_id')).pipe(delay(250), retry(3)).toPromise().then((res: any) => {

      this.cancelled_orders = res
    })
  }

  async order_status_change(order_no: string) {
    await this.http.get(this.orderChangeUrl + localStorage.getItem('u_id') + '/' + order_no + '/' + this.order_status).pipe(delay(250), retry(3)).toPromise().then((res: any) => {
      this.order_status = ''
      this.getOrders()
    })
  }

}
