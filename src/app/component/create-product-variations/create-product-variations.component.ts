import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, delay, retry } from "rxjs/operators";

@Component({
  selector: 'app-create-product-variations',
  templateUrl: './create-product-variations.component.html',
  styleUrls: ['./create-product-variations.component.scss']
})
export class CreateProductVariationsComponent implements OnInit {

  disabled: boolean = false
  token: string | null = localStorage.getItem('token')
  uid: string | null = localStorage.getItem('u_id')
  url: string = 'https://administrator.goodyellowco.com/api/u/vendor/create/product/variations?token='
  dataUrl: string = 'https://administrator.goodyellowco.com/api/u/vendor/get/product/variations/'
  changeUrl: string = 'https://administrator.goodyellowco.com/api/u/vendor/get/product/variations/second/'
  getVariationUrl: string = 'https://administrator.goodyellowco.com/api/u/vendor/get/product/variations/user/defined/'
  publishUrl: string = 'https://administrator.goodyellowco.com/api/u/vendor/create/product/publish?token='
  deleteUrl: string = 'https://administrator.goodyellowco.com/api/u/vendor/edit/product/varriations/delete/'
  productid: string | null = ''
  key: string = ''
  value: string = ''
  data: any = []
  dataa: any = []
  data_val: any = []
  first: string = ''
  second: string = ''
  sec_data: any = []
  inventory: string = ''
  price: string = ''
  variations: any = []


  constructor(
    private router: Router,
    private http: HttpClient,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.productid = this.route.snapshot.paramMap.get('id')
    this.getData()
    this.getVariations()
  }

  async getVariations() {
    await this.http.get(this.getVariationUrl + localStorage.getItem('u_id') + '/' + this.productid + '?token=' + localStorage.getItem('token')).pipe(delay(100), retry(3)).toPromise().then((res: any) => {
      //console.log(res)
      this.variations = res

    });
  }

  async getData() {
    await this.http.get(this.dataUrl + localStorage.getItem('u_id') + '/' + this.productid + '?token=' + localStorage.getItem('token')).pipe(delay(100), retry(3)).toPromise().then((res: any) => {
      this.data = res[0].value.split(',')
      this.dataa = res[1].value.split(',')

    });
  }

  async changeFirst() {
    await this.http.get(this.changeUrl + this.first + '/tok/' + '?token=' + localStorage.getItem('token')).pipe(delay(100), retry(3)).toPromise().then((res: any) => {
      console.log(res)
      this.sec_data = res.value.split(',')

    });
  }

  add_more() {
    this.disabled = true
    const myheader = new HttpHeaders();
    //myheader.set('Access-Control-Allow-Origin', '*');
    myheader.set('Content-Type', 'application/x-www-form-urlencoded');

    const formData = new FormData();
    formData.append('product_id', this.productid ?? '')
    formData.append('key', this.first)
    formData.append('value', this.second)
    formData.append('inventory', this.inventory)
    formData.append('price', this.price)
    formData.append('user_id', this.uid ?? '')


    this.http.post<any>(this.url + this.token, formData, {
      headers: myheader
    }).subscribe(response => {
        this.disabled = false

        if(response.id) {
          this.first = ''
          this.second = ''
          this.price = ''
          this.inventory = ''
          this.getVariations()
        } else {
          alert(response.err)
        }




    });
  }

  publish() {
    this.disabled = true
    const myheader = new HttpHeaders();
    //myheader.set('Access-Control-Allow-Origin', '*');
    myheader.set('Content-Type', 'application/x-www-form-urlencoded');

    const formData = new FormData();
    formData.append('product_id', this.productid ?? '')

    this.http.post<any>(this.publishUrl + this.token, formData, {
      headers: myheader
    }).subscribe(response => {
        this.disabled = false

        if(response.p_uniq_id) {
          this.router.navigate(['preview-product', response.p_uniq_id])
        } else {
          alert('Something is wrong. Please try again later.')
        }




    });
  }

  async delete(id: number) {
    var conf = confirm('Are you sure?')
    if(conf) {
      await this.http.get(this.deleteUrl + id + '?token=' + localStorage.getItem('token')).pipe(delay(100), retry(3)).toPromise().then(res => {
        this.getVariations()
      });
    }
  }

  come_back() {
    this.router.navigate(['vendor-storefront'])
  }

}
