import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, delay, retry } from "rxjs/operators";

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {

  base64textString: any
  photos_of_brand: string = ''

  url: string = 'https://administrator.goodyellowco.com/api/u/vendor/edit/product?token='
  dataUrl: string = 'https://administrator.goodyellowco.com/api/u/vendor/product/edit/'

  disabled: boolean = false
  token: string | null = localStorage.getItem('token')
  uid: string | null = ''

  validError: boolean = false
  validPrice: string = ''
  validName: string = ''
  validshipping_time: string = ''
  validcate: string = ''
  validsubcate: string = ''
  validdesc: string = ''
  validinventory: string = ''
  validshipping_cost: string = ''


  price: string = ''
  name: string = ''
  shipping_time: string = ''
  shipping_cost: string = '0'
  cate: string = ''
  subcate: string = ''
  desc: string = ''
  ship_interval: string = ''
  type_discount: string = ''
  inventory: string = ''
  disc_percentage: any = 0
  end_date_disc: string = ''
  imp_details: string = ''
  excl_discount: string = ''
  excl_prod: string = ''

  products: any = []
  pid: string | null = ''

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.uid = localStorage.getItem('u_id');
    this.pid = this.route.snapshot.paramMap.get('pid')
    this.getProducts()
  }

  async getProducts() {
    await this.http.get(this.dataUrl + this.pid + '?token=' + localStorage.getItem('token')).pipe(delay(100), retry(3)).toPromise().then((res: any) => {

      this.price = res.p_price
      this.name = res.p_name
      this.shipping_time = res.p_shipping_time
      this.desc = res.p_desc
      this.ship_interval = res.shipping_interval
      this.type_discount = res.type_discount
      this.inventory = res.inventory
      this.disc_percentage = res.discount_percentage
      this.end_date_disc = res.end_discount
      this.imp_details = res.important_details
      this.excl_discount = res.exclus_discount
      this.excl_prod = res.exclus_product
      this.shipping_cost = res.shipping_cost
    });
  }

  publish() {
    if(this.disc_percentage != '' && this.disc_percentage < 5) {
      alert('Discount percentage should be or greater than 5% ')
    } else {
      this.disabled = true
      const myheader = new HttpHeaders();
      //myheader.set('Access-Control-Allow-Origin', '*');
      myheader.set('Content-Type', 'application/x-www-form-urlencoded');

      const formData = new FormData();
      formData.append('price', this.price)
      formData.append('name', this.name)
      formData.append('shipping_time', this.shipping_time)
      formData.append('shipping_cost', this.shipping_cost)
      formData.append('category', this.cate)
      formData.append('sub_category', this.subcate)
      formData.append('product_description', this.desc)
      formData.append('shipping_interval', this.ship_interval)
      formData.append('type_discount', this.type_discount)
      formData.append('inventory', this.inventory)
      formData.append('discount_percentage', this.disc_percentage)
      formData.append('discount_end_date', this.end_date_disc)
      formData.append('important_details', this.imp_details)
      formData.append('exclusive_discount', this.excl_discount)
      formData.append('exclusive_product', this.excl_prod)
      formData.append('user_id', this.uid ?? '')
      formData.append('id', this.pid ?? '')


      this.http.post<any>(this.url + this.token, formData, {
        headers: myheader
      }).subscribe(response => {
         this.disabled = false

         if(response.id) {
          this.router.navigate(['create-product-image-upload', response.id])
         } else {
          this.validError = true
          this.validPrice = response.price
          this.validName = response.name
          this.validshipping_time = response.shipping_time
          this.validcate = response.category
          this.validsubcate = response.sub_category
          this.validdesc = response.product_description
          this.validinventory = response.inventory
          this.validshipping_cost = response.shipping_cost

         }


      });
    }

  }

}
