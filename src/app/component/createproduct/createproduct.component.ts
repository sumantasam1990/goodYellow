import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createproduct',
  templateUrl: './createproduct.component.html',
  styleUrls: ['./createproduct.component.scss']
})
export class CreateproductComponent implements OnInit {

  base64textString: any
  photos_of_brand: string = ''

  url: string = 'https://administrator.goodyellowco.com/api/u/vendor/create/product?token='

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
  disc_percentage: any = ''
  end_date_disc: string = ''
  imp_details: string = ''
  excl_discount: string = ''
  excl_prod: string = ''



  constructor(
    private http: HttpClient,
    private router: Router,
  ) {

  }

  ngOnInit(): void {
    this.uid = localStorage.getItem('u_id');
  }

  async getData() {
    // await this.http.get(this.dataUrl + localStorage.getItem('u_id') + '?token=' + localStorage.getItem('token')).pipe(delay(100), retry(3)).toPromise().then(res => {
    //   this.photos = res
    // });
  }

  // _handleReaderLoaded(readerEvt: any) {
  //    var binaryString = readerEvt.target.result;
  //           this.base64textString= btoa(binaryString);
  //           this.photos_of_brand = btoa(binaryString)
  //   }

  // doFileInput(evt: any) {
  //   var files = evt.target.files;
  //     var file = files[0];
  //   if (files && file) {
  //       var reader = new FileReader();
  //       reader.onload =this._handleReaderLoaded.bind(this);
  //       reader.readAsBinaryString(file);
  //   }
  // }



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
