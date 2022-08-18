import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map, delay, retry } from "rxjs/operators";

@Component({
  selector: 'app-public-brand-photos',
  templateUrl: './public-brand-photos.component.html',
  styleUrls: ['./public-brand-photos.component.scss']
})
export class PublicBrandPhotosComponent implements OnInit {

  uid: string | null = localStorage.getItem('u_id')
  token: string | null = localStorage.getItem('token')
  dataUrl: string = 'https://administrator.goodyellowco.com/api/u/vendor/brand/photos_of_brand/'
  data: any = []

  constructor(
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    this.getData()
  }

  async getData() {
    await this.http.get(this.dataUrl + localStorage.getItem('u_id') + '?token=' + localStorage.getItem('token')).pipe(delay(100), retry(3)).toPromise().then((res: any) => {
      this.data = res
    });
  }

}
