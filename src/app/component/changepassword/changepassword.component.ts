import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, delay, retry } from "rxjs/operators";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.scss']
})
export class ChangepasswordComponent implements OnInit {

  disabled: boolean = false
  password: string = ''
  conf_password: string = ''
  url: any = 'https://administrator.goodyellowco.com/api/vendor/email/forgot/password/save'
  token: string | null = ''

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }

  async ngOnInit() {
    this.token = this.route.snapshot.paramMap.get('token')
  }

  save() {
    if(this.password == this.conf_password) {
      this.disabled = true
      const myheader = new HttpHeaders();
      //myheader.set('Access-Control-Allow-Origin', '*');
      myheader.set('Content-Type', 'application/x-www-form-urlencoded');

      const formData = new FormData();
      formData.append('password', this.conf_password)
      formData.append('token', this.token ?? '')

      this.http.post<any>(this.url, formData, {
        headers: myheader
      }).subscribe(response => {
         this.disabled = false
         this.password = ''
        if(response.succ) {

          Swal.fire({
             title: 'Hurray!!',
             text:   response.succ,
             icon: 'success'
         }).then(r => {
          this.router.navigate(['login'])
         });


        } else {
          Swal.fire({
             title: 'Hurray!!',
             text:   response.msg,
             icon: 'error'
         }).then(r => {
          this.router.navigate(['login'])
         });
        }
      });
    } else {
      Swal.fire({
        text: 'Password not matched',
        icon: 'error'
      })
    }

  }

}
