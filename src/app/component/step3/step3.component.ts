import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, delay, retry } from "rxjs/operators";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.scss']
})
export class Step3Component implements OnInit {

  base64textString: any
  mainProfile: string = ''
  coverPhoto: string = ''
  brandPhoto: string = ''
  uid: string | null = localStorage.getItem('u_id')
  token: string | null = localStorage.getItem('token')
  url: string = 'https://administrator.goodyellowco.com/api/u/vendor/signup/brand/photos?token='
  dataUrl: string = 'https://administrator.goodyellowco.com/api/u/vendor/brand/photos/'
  deleteUrl: string = 'https://administrator.goodyellowco.com/api/u/vendor/brand/photos/delete/'
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
            this.mainProfile = btoa(binaryString)
    }

  doFileInput(evt: any) {
    if(evt.target.files[0].size > 1000000) {
      alert('Main Photo size should be less than 1MB.')
      this.disabled = false
      this.mainProfile = ''
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

  // cover photo
    _handleReaderLoadedCover(readerEvt: any) {
     var binaryString = readerEvt.target.result;
            this.base64textString= btoa(binaryString);
            this.coverPhoto = btoa(binaryString)
    }

  doFileInputCover(evt: any) {
    if(evt.target.files[0].size > 1000000) {
      alert('Cover Photo size should be less than 1MB.')
      this.disabled = false
      this.coverPhoto = ''
    } else {
      var files = evt.target.files;
      var file = files[0];
      if (files && file) {
          var reader = new FileReader();
          reader.onload =this._handleReaderLoadedCover.bind(this);
          reader.readAsBinaryString(file);
      }
    }

  }

  // brand photo
    _handleReaderLoadedBrand(readerEvt: any) {
      var binaryString = readerEvt.target.result;
      this.base64textString= btoa(binaryString);
      this.brandPhoto = btoa(binaryString)
    }

    doFileInputBrand(evt: any) {
      if(evt.target.files[0].size > 1000000) {
        alert('Brand Photo size should be less than 1MB.')
        this.disabled = false
        this.brandPhoto = ''
      } else {
        var files = evt.target.files;
        var file = files[0];
        if (files && file) {
          var reader = new FileReader();
          reader.onload =this._handleReaderLoadedBrand.bind(this);
          reader.readAsBinaryString(file);
        }
      }

    }

    upload() {
      this.disabled = true
      const myheader = new HttpHeaders();
      //myheader.set('Access-Control-Allow-Origin', '*');
      myheader.set('Content-Type', 'application/x-www-form-urlencoded');

      const formData = new FormData();
      formData.append('main', this.mainProfile)
      formData.append('cover', this.coverPhoto)
      formData.append('brand', this.brandPhoto)
      formData.append('user_id', this.uid ?? '')

      this.http.post<any>(this.url + this.token, formData, {
        headers: myheader
      }).subscribe(response => {
        this.disabled = false
        if(response) {
          Swal.fire({
            title: 'Hurray!!',
            text: 'Photos successfully uploaded',
            icon: 'success'
          }).then(ret => {
            this.getPhotos()
          })


        }
      });
    }

    next() {
      localStorage.setItem('goodyellow_step', '3')
      this.router.navigate(['vendor-signup-brand-photos'])
    }

    async delete(id: number) {
      var conf = confirm("Are you sure?")
      if(conf) {
        await this.http.get(this.deleteUrl + id + '?token=' + localStorage.getItem('token')).pipe(delay(100), retry(3)).toPromise().then(res => {
          Swal.fire({
            title: 'Hurray!!',
            text: 'Photo deleted successfully',
            icon: 'success'
          }).then(ret => {
            this.getPhotos()
          })
        });
      }
    }


}
