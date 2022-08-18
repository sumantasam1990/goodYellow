import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, delay, retry } from "rxjs/operators";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-discount-product-image-upload',
  templateUrl: './add-discount-product-image-upload.component.html',
  styleUrls: ['./add-discount-product-image-upload.component.scss']
})
export class AddDiscountProductImageUploadComponent implements OnInit {

  base64textString: any
  photos_of_brand: string = ''
  productid: string | null = ''

  url: string = 'https://administrator.goodyellowco.com/api/u/vendor/create/product/discount/photo?token='
  dataUrl: string = 'https://administrator.goodyellowco.com/api/u/vendor/get/product/discount/photos/'
  deleteUrl: string = 'https://administrator.goodyellowco.com/api/u/vendor/edit/product/discount/photo/delete/'

  disabled: boolean = false
  token: string | null = localStorage.getItem('token')
  uid: string | null = localStorage.getItem('u_id')
  photos: any = []
  preview_photo: string = ''
  main_err: string = ''
  upload_txt: string = ''

  constructor(
    private router: Router,
    private http: HttpClient,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.productid = this.route.snapshot.paramMap.get('id')
    this.getData()
  }

    async getData() {
    await this.http.get(this.dataUrl + localStorage.getItem('u_id') + '/' + this.productid + '?token=' + localStorage.getItem('token')).pipe(delay(100), retry(3)).toPromise().then(res => {
      this.photos = res
    });
  }

  _handleReaderLoaded(readerEvt: any) {
     var binaryString = readerEvt.target.result;
            this.photos_of_brand = btoa(binaryString)
            this.preview_photo = 'data:image/png;base64,' + btoa(binaryString)

    }

  doFileInput(evt: any) {

    if(evt.target.files[0].size > 1000000) {
      alert('Image size should be less than 1MB.')
      this.disabled = false
      this.preview_photo = ''
    }
    else {
      var files = evt.target.files;
      var file = files[0];
      if (files && file) {
          var reader = new FileReader();
          reader.onload =this._handleReaderLoaded.bind(this);
          reader.readAsBinaryString(file);

      }
    }

  }

  upload() {
    if(this.photos_of_brand != '') {
      this.disabled = true
      this.upload_txt = "Uploading..."
      const myheader = new HttpHeaders();
      //myheader.set('Access-Control-Allow-Origin', '*');
      myheader.set('Content-Type', 'application/x-www-form-urlencoded');

      const formData = new FormData();
      formData.append('product_id', this.productid ?? '')
      formData.append('main', this.photos_of_brand)
      formData.append('user_id', this.uid ?? '')


      this.http.post<any>(this.url + this.token, formData, {
        headers: myheader
      }).subscribe(response => {
        this.upload_txt = ''
         this.disabled = false
         this.getData()
         this.preview_photo = ''
         this.photos_of_brand = ''
         Swal.fire({
            text: 'Photo successfully uploaded.',
            icon: 'success'
          })
         if(response.main) {
          Swal.fire({
            text: response.main,
            icon: 'info'
          })

         }



      });
    } else {
      Swal.fire({
        text: 'Please select a photo',
        icon: 'warning'
      })
    }

  }

  next() {
    this.router.navigate(['vendor-storefront'])
  }

  async delete(id: number) {
    var conf = confirm('Are you sure?')
    if(conf) {
      await this.http.get(this.deleteUrl + id + '?token=' + localStorage.getItem('token')).pipe(delay(100), retry(3)).toPromise().then(res => {
      this.getData()
      Swal.fire({
            text: 'Photo successfully deleted.',
            icon: 'success'
      })
    });
    }
  }

}
