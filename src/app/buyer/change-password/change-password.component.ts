import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, delay, retry } from "rxjs/operators";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  disabled: boolean = false
  password: string = ''
  old_password: string = ''
  conf_password: string = ''
  url: any = 'https://administrator.goodyellowco.com/api/buyer/email/change/password/save'
  token: string | null = ''

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }

  async ngOnInit() {
    //this.token = this.route.snapshot.paramMap.get('token')
  }

  save() {
    if(this.password == this.conf_password) {
      this.disabled = true
      const myheader = new HttpHeaders();
      //myheader.set('Access-Control-Allow-Origin', '*');
      myheader.set('Content-Type', 'application/x-www-form-urlencoded');

      const formData = new FormData();
      formData.append('new', this.conf_password)
      formData.append('old', this.old_password)
      formData.append('bid', localStorage.getItem('b_u_id') ?? '')


      this.http.post<any>(this.url, formData, {
        headers: myheader
      }).subscribe(response => {
         this.disabled = false
         this.password = ''
         this.old_password = ''
         this.conf_password = ''
        if(response.succ) {

          Swal.fire({
             title: 'Hurray!!',
             text:   response.succ,
             icon: 'success'
         }).then(r => {

         });


        } else {
          Swal.fire({
             title: 'Error!!',
             text:   response.err,
             icon: 'error'
         }).then(r => {

         });
        }
      }, (err) => {
        Swal.fire({
        text: err.message(),
        icon: 'error'
      })
      });
    } else {
      Swal.fire({
        text: 'Password not matched',
        icon: 'error'
      })
    }

  }

}
