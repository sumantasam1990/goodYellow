import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, delay, retry } from "rxjs/operators";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-discountproduct',
  templateUrl: './discountproduct.component.html',
  styleUrls: ['./discountproduct.component.scss'],
})
export class DiscountproductComponent implements OnInit {

  uid: string | null = localStorage.getItem('u_id')
  token: string | null = localStorage.getItem('token')
  url: any = 'https://administrator.goodyellowco.com/api/u/vendor/preview/discount/'
  sendUrl: any = 'https://administrator.goodyellowco.com/api/discount/product/send/email/'
  disabled: boolean = false

  quantity: number = 1
  product_id: string | null = ''
  product: any;
  imagess: any = []
  attributes: any = []
  qtd:any = []
  key: string = 'key'
  val: string = 'val'
  price: string = '0.00'
  discount_price: string = '0.00'
  discount: number = 0
  shipping_cost: any = 0


  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,

  ) { }

  ngOnInit(): void {
    this.qtd.Size = 'key'
    this.qtd.Color = 'val'
    this.product_id = this.route.snapshot.paramMap.get('id')
    this.getProduct()

  }

  async getProduct() {
    await this.http.get(this.url + localStorage.getItem('u_id') + '/' + this.product_id + '?token=' + localStorage.getItem('token')).pipe(delay(100), retry(3)).toPromise().then((res: any) => {
      console.log(res)
      this.product = res.product
      this.imagess = res.images
      this.attributes = res.attributes
      this.price = res.product.price
      this.discount_price = res.product.discount_price
      this.discount = res.product.discount
      this.shipping_cost = parseFloat(res.product.shipping_cost)
    }).catch(error => {
         // work with error
         Swal.fire({
          title: error.name,
          text: error.message
         })
     });
  }


  async getDiscount() {

    this.disabled = true
    await this.http.get(this.sendUrl + this.product_id + '/' + localStorage.getItem('b_u_id')).pipe(delay(100), retry(3)).toPromise().then((res: any) => {

      this.disabled = false

      if(res.err) {
        Swal.fire({
          text: res.err,
          icon: 'error'
         })
      } else {
        Swal.fire({
          text: 'We have sent "PROMO CODE" through an email to your registered email id.',
          icon: 'success'
         })
      }

    }).catch(error => {
         // work with error
         Swal.fire({
          title: error.name,
          text: error.message
         })
     });
  }

}
