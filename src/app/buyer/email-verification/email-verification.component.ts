import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, delay, retry } from "rxjs/operators";

@Component({
  selector: 'app-email-verification',
  templateUrl: './email-verification.component.html',
  styleUrls: ['./email-verification.component.scss']
})
export class EmailVerificationComponent implements OnInit {

  msg: string = 'Please wait... We are validating...'
  url: string = 'https://administrator.goodyellowco.com/api/buyer/email/verification/'
  token: string | null = ''

  constructor(
    private router: Router,
    private http: HttpClient,
    private route: ActivatedRoute,
  ) { }

  async ngOnInit() {
    this.token = this.route.snapshot.paramMap.get('token')
    await this.http.get(this.url + this.token).pipe(delay(500), retry(3)).toPromise().then((res: any) => {
      this.msg = res
    });
  }

}
