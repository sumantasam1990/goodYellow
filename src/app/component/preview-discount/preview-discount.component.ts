import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonRefresher } from '@ionic/angular';
import { map, delay, retry } from "rxjs/operators";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-preview-discount',
  templateUrl: './preview-discount.component.html',
  styleUrls: ['./preview-discount.component.scss']
})
export class PreviewDiscountComponent implements OnInit {

  uid: string | null = localStorage.getItem('u_id')
  token: string | null = localStorage.getItem('token')
  url: any = 'https://administrator.goodyellowco.com/api/u/vendor/preview/discount/'
  variUrl: any = 'https://administrator.goodyellowco.com/api/u/vendor/preview/product/variation/'
  disabled: boolean = true

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

  var_chng() {
    this.key = this.qtd.Size
    this.val = this.qtd.Color

    this.getVariation()
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

  async getVariation() {
    this.disabled = true
    await this.http.get(this.variUrl + localStorage.getItem('u_id') + '/' + this.product_id + '/' + this.key + '/' + this.val + '/' + this.quantity + '?token=' + localStorage.getItem('token')).pipe(delay(100), retry(3)).toPromise().then((res: any) => {
      console.log(res)
      this.price = res.variation.price
      this.discount_price = res.variation.discount_price
      if(res.variation.price) {
        this.disabled = false
      } else {
        this.disabled = true
        alert('You can not buy this variation of this product. Please try another variation.')
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
