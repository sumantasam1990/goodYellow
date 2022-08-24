import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { map, delay, retry } from "rxjs/operators";

@Component({
  selector: 'app-change-membership-details',
  templateUrl: './change-membership-details.component.html',
  styleUrls: ['./change-membership-details.component.scss']
})
export class ChangeMembershipDetailsComponent implements OnInit {

  url: string = 'https://administrator.goodyellowco.com/api/buyer/membership/'
  exp: any = []

  constructor(
     private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  async ngOnInit() {
    await this.getData()
  }

  async getData() {
    await this.http.get(this.url + localStorage.getItem('b_u_id')).pipe(delay(250), retry(4)).toPromise().then(res => {
      this.exp = res
    });
  }

}
