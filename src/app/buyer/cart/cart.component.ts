import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map, delay, retry } from "rxjs/operators";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  cartUrl: string = 'https://administrator.goodyellowco.com/api/buyer/cart/'
  carts: any = []

  constructor(
    private router: Router,
    private http: HttpClient,
  ) { }

  async ngOnInit() {
    await this.http.get(this.cartUrl + '1').pipe(delay(100), retry(3)).toPromise().then(res => {
      this.carts = res
    });
  }

}
