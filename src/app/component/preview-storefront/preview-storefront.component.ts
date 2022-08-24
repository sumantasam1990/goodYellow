import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, delay, retry } from "rxjs/operators";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-preview-storefront',
  templateUrl: './preview-storefront.component.html',
  styleUrls: ['./preview-storefront.component.scss']
})

export class PreviewStorefrontComponent implements OnInit {

  uid: string | null = localStorage.getItem('u_id')
  token: string | null = localStorage.getItem('token')
  b_uid: string | null = localStorage.getItem('b_u_id')
  url: any = 'https://administrator.goodyellowco.com/api/vendor/storefront/preview/'
  deleteurl: any = 'https://administrator.goodyellowco.com/api/u/vendor/product/delete/'
  disabled: boolean = false
  vendorData: any = []
  slug: string | null = ''
  loading: boolean = true

  subscribeUrl: string = 'https://administrator.goodyellowco.com/api/buyer/subscribe/brand/storefront/'
  subscribed: boolean = false;

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  async ngOnInit() {
    this.slug = this.route.snapshot.paramMap.get('compname')
    await this.getVendorInfo()
  }

  async getVendorInfo() {
    this.loading = true
    await this.http.get(this.url + this.slug + '/' + this.b_uid).pipe(delay(100), retry(3)).toPromise().then(res => {
      this.loading = false
      this.vendorData = res
      if(this.vendorData.subscribed == 'Yes') {
        this.subscribed = true
      } else {
        this.subscribed = false
      }
    }).catch(error => {
      this.loading = false
         // work with error
         Swal.fire({
          title: error.name,
          text: error.message
         })
     });
  }

  async deleteProduct(id: any) {
    var conf = confirm('Are you sure?')
    if(conf) {
      await this.http.get(this.deleteurl + id + '?token=' + localStorage.getItem('token')).pipe(delay(100), retry(3)).toPromise().then(res => {
        if(res == 'success') {
          this.getVendorInfo()
          alert('Product has been deleted successfully')
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

  public_founders() {
    this.router.navigate(['vendor/public/founders'])
  }

  public_people() {
    this.router.navigate(['vendor/public/people'])
  }

  public_story() {
    this.router.navigate(['vendor/public/story'])
  }

  public_faqs() {
    this.router.navigate(['vendor/public/faqs'])
  }

  public_brand_video() {
    this.router.navigate(['vendor/public/brand/video'])
  }

  public_brand_photo() {
    this.router.navigate(['vendor/public/brand/photos'])
  }

  async subscribe() {
    if(this.b_uid != '') {
      await this.http.get(this.subscribeUrl + this.slug + '/' + this.b_uid).pipe(delay(250), retry(4)).toPromise().then((res: any) => {

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
