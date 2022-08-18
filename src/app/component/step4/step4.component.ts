import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, delay, retry } from "rxjs/operators";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-step4',
  templateUrl: './step4.component.html',
  styleUrls: ['./step4.component.scss']
})
export class Step4Component implements OnInit {

  base64textString: any
  photos_of_brand: string = ''
  uid: string | null = localStorage.getItem('u_id')
  token: string | null = localStorage.getItem('token')
  url: any = 'https://administrator.goodyellowco.com/api/u/vendor/signup/brand/photos?token='
  dataUrl: string = 'https://administrator.goodyellowco.com/api/u/vendor/brand/photos_of_brand/'
  photos: any = []
  disabled: boolean = false
  storefront: string | null = ''

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  async ngOnInit() {
    this.storefront = this.route.snapshot.paramMap.get('storefront')
    await this.getPhotos()
  }

  async getPhotos() {
    await this.http.get(this.dataUrl + localStorage.getItem('u_id') + '?token=' + localStorage.getItem('token')).pipe(delay(100), retry(3)).toPromise().then(res => {
      this.photos = res
    });
  }

  _handleReaderLoaded(readerEvt: any) {
     var binaryString = readerEvt.target.result;
            this.base64textString= btoa(binaryString);
            this.photos_of_brand = btoa(binaryString)
    }

  doFileInput(evt: any) {
    if(evt.target.files[0].size > 1000000) {
      alert('Brand Photo size should be less than 1MB.')
      this.disabled = false
      this.photos_of_brand = ''
      } else {
        var files = evt.target.files;
        var file = files[0];
        if (files && file) {
            var reader = new FileReader();
            reader.onload =this._handleReaderLoaded.bind(this);
            reader.readAsBinaryString(file);
        }
      }

  }

  add_more() {
    if(this.photos_of_brand != '') {
      this.disabled = true
      const myheader = new HttpHeaders();
      //myheader.set('Access-Control-Allow-Origin', '*');
      myheader.set('Content-Type', 'application/x-www-form-urlencoded');

      const formData = new FormData();
      formData.append('photos_of_brand', this.photos_of_brand)
      formData.append('user_id', this.uid ?? '')

      this.http.post<any>(this.url + this.token, formData, {
        headers: myheader
      }).subscribe(response => {
         this.disabled = false
        if(response) {
          Swal.fire({
             title: 'Hurray!!',
             text:   'Photos successfully uploaded',
             icon: 'success'
         });
          //alert('Photos successfully uploaded')
          this.photos_of_brand = ''
          this.getPhotos()

        }
      });
    } else {
      Swal.fire({
             //title: 'Error!!',
             text:   'Please select a photo',
             icon: 'warning'
         });
    }

  }

  next() {
    localStorage.setItem('goodyellow_step', '4')
    this.router.navigate(['vendor-signup-founders'])
  }

}
