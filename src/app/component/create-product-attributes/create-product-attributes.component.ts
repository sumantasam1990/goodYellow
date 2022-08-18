import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, delay, retry } from "rxjs/operators";

@Component({
  selector: 'app-create-product-attributes',
  templateUrl: './create-product-attributes.component.html',
  styleUrls: ['./create-product-attributes.component.scss']
})
export class CreateProductAttributesComponent implements OnInit {

  disabled: boolean = false
  token: string | null = localStorage.getItem('token')
  uid: string | null = localStorage.getItem('u_id')
  url: string = 'https://administrator.goodyellowco.com/api/u/vendor/create/product/attributes?token='
  dataUrl: string = 'https://administrator.goodyellowco.com/api/u/vendor/edit/product/attributes/'
  deleteUrl: string = 'https://administrator.goodyellowco.com/api/u/vendor/edit/product/attributes/delete/'
  productid: string | null = ''
  key: string = ''
  value: string = ''
  attrs: any = []

  constructor(
    private router: Router,
    private http: HttpClient,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.productid = this.route.snapshot.paramMap.get('id')
    this.getAttributes()
  }

  async getAttributes() {
    await this.http.get(this.dataUrl + this.productid + '?token=' + localStorage.getItem('token')).pipe(delay(100), retry(3)).toPromise().then(res => {
      this.attrs = res
    });
  }

  add_more() {
    this.disabled = true
    const myheader = new HttpHeaders();
    //myheader.set('Access-Control-Allow-Origin', '*');
    myheader.set('Content-Type', 'application/x-www-form-urlencoded');

    const formData = new FormData();
    formData.append('product_id', this.productid ?? '')
    formData.append('key', this.key)
    formData.append('value', this.value)
    formData.append('user_id', this.uid ?? '')


    this.http.post<any>(this.url + this.token, formData, {
      headers: myheader
    }).subscribe(response => {
        this.disabled = false

        if(response.id) {
          this.key = ''
          this.value = ''
        } else {
          alert(response.err)
        }

        this.getAttributes()



    });
  }

  next() {
    this.router.navigate(['create-product-variations', this.productid])
  }

  async delete(id: number) {
    var conf = confirm('Are you sure? If you delete any attribute, all variations would be deleted.')
    if(conf) {
      await this.http.get(this.deleteUrl + id + '/' + this.productid + '?token=' + localStorage.getItem('token')).pipe(delay(100), retry(3)).toPromise().then(res => {
      this.getAttributes()
      });
    }
  }

}
