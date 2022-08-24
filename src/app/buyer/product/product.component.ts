import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, delay, retry } from "rxjs/operators";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  uid: string | null = localStorage.getItem('u_id')
  b_uid: string | null = localStorage.getItem('b_u_id')
  token: string | null = localStorage.getItem('token')
  url: any = 'https://administrator.goodyellowco.com/api/vendor/preview/product/'
  variUrl: any = 'https://administrator.goodyellowco.com/api/u/vendor/preview/product/variation/'
  cartUrl: string = 'https://administrator.goodyellowco.com/api/buyer/cart/post'

  subscribeUrl: string = 'https://administrator.goodyellowco.com/api/buyer/subscribe/brand/'

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
  shipping_cost: any = []

  subscribed: boolean = false


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
    await this.http.get(this.url + this.product_id + '/' +this.b_uid).pipe(delay(100), retry(3)).toPromise().then((res: any) => {
      //checking subscribtion

      if(res.product.subscribed == 'Yes') {
        this.subscribed = true
      } else {
        this.subscribed = false
      }


      this.product = res.product
      this.imagess = res.images
      this.attributes = res.attributes
      this.price = res.product.price
      this.discount_price = res.product.discount_price
      this.discount = res.product.discount
      this.shipping_cost = res.product.shipping_cost
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
      if(res.err) {
        Swal.fire({
          text: res.err,
          icon: 'error'
         })
      } else {
        this.price = res.variation.price
        this.discount_price = res.variation.discount_price
        if(res.variation.price) {
          this.disabled = false
        } else {
          this.disabled = true
          alert('You can not buy this variation of this product. Please try another variation.')
        }
      }


    }).catch(error => {
         // work with error
         Swal.fire({
          title: error.name,
          text: error.message,
          icon: 'error'
         })
     });
  }

  async addtocart() {
    if(this.quantity > 0 && this.quantity && this.product_id != '' && this.product_id != ' ') {

      //alert(this.qtd.Size + this.qtd.Color)

      await this.postCart()

    } else {
      Swal.fire({
        text: 'Quantity should be minimum 1',
        icon: 'error'
      })
    }
  }

  async postCart() {
    const myheader = new HttpHeaders();
    //myheader.set('Access-Control-Allow-Origin', '*');
    myheader.set('Content-Type', 'application/x-www-form-urlencoded');

    const formData = new FormData();
    formData.append('quantity', this.quantity.toString());
    formData.append('buyer_id', this.b_uid ?? '');
    formData.append('product', this.product_id ?? '');

    formData.append('var_size', this.qtd.Size != 'key' ? this.qtd.Size : '');
    formData.append('var_color', this.qtd.Color != 'val' ? this.qtd.Color : '');


    this.http.post<any>(this.cartUrl, formData, {
      headers: myheader
    }).subscribe(_res => {

      if(_res.status === 1) {
        Swal.fire({
          text: _res.msg,
          icon: 'success'
        }).then(_r => {
          this.router.navigate(['/u/cart'])
        })
      } else {
        Swal.fire({
          text: _res.msg,
          icon: 'error'
        })
      }


    });
  }

  async subscribe() {
    if(this.b_uid != '') {
      await this.http.get(this.subscribeUrl + this.product_id + '/' + this.b_uid).pipe(delay(250), retry(4)).toPromise().then((res: any) => {

        if(res.msg == 'success') {

          Swal.fire({
            title: 'Subscribed',
            text: 'You have successfully subscribed to this brand. Now you can purchase any products from this brand.',
            icon: 'success'
          }).then(() => {
            this.subscribed = true
          })

        } else {
          Swal.fire({
            title: 'Error!',
            text: res.msg,
            icon: 'error'
          }).then(() => {
            this.subscribed = false
          })
        }

      }).catch(error => {
          // work with error
          Swal.fire({
            title: error.name,
            text: error.message
          })
          this.subscribed = false
      });
    }
  }

}
