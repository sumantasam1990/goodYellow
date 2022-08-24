import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { map, delay, retry } from "rxjs/operators";

import { Component, OnInit, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartUrl: string = 'https://administrator.goodyellowco.com/api/buyer/cart/'
  carts: any = []

  cartDeleteAll: string = 'https://administrator.goodyellowco.com/api/buyer/cart/remove/all/'

  cartDeleteOne: string = 'https://administrator.goodyellowco.com/api/buyer/cart/remove/one/'


  constructor(
    private router: Router,
    private http: HttpClient,
  ) {

  }

  async ngOnInit() {
    await this.getData()
  }

  async getData() {
    await this.http.get(this.cartUrl + localStorage.getItem('b_u_id')).pipe(delay(100), retry(3)).toPromise().then(res => {
      this.carts = res
    });
  }

  async removeAll(uid: number) {

    await Swal.fire({
      title: 'Do you want to delete all from this brand?',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Yes',
      denyButtonText: 'No',
      customClass: {
        actions: 'my-actions',
        cancelButton: 'order-1 right-gap',
        confirmButton: 'order-2',
        denyButton: 'order-3',
      }
    }).then((result) => {
      if (result.isConfirmed) {
        this.http.get(this.cartDeleteAll + uid + '/' + localStorage.getItem('b_u_id')).pipe(delay(250), retry(3)).toPromise().then(() => {
          Swal.fire('Deleted!', '', 'success')
          this.getData()
        });

      } else if (result.isDenied) {
        //Swal.fire('Changes are not saved', '', 'info')
      }
    })


  }

  async removeOne(pid: number) {

    await Swal.fire({
      title: 'Do you want to delete this product?',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Yes',
      denyButtonText: 'No',
      customClass: {
        actions: 'my-actions',
        cancelButton: 'order-1 right-gap',
        confirmButton: 'order-2',
        denyButton: 'order-3',
      }
    }).then((result) => {
      if (result.isConfirmed) {
        this.http.get(this.cartDeleteOne + pid + '/' + localStorage.getItem('b_u_id')).pipe(delay(250), retry(3)).toPromise().then(() => {
          Swal.fire('Deleted!', '', 'success')
          this.getData()
        });

      } else if (result.isDenied) {
        //Swal.fire('Changes are not saved', '', 'info')
      }
    })


  }


}
