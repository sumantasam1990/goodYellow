import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-discount-list-details-level-three',
  templateUrl: './discount-list-details-level-three.component.html',
  styleUrls: ['./discount-list-details-level-three.component.scss']
})
export class DiscountListDetailsLevelThreeComponent implements OnInit {

  url: string = 'https://administrator.goodyellowco.com/api/discount/list/details/three/'
  loading: boolean = false
  discounts: any = []
  id: string | null = ''
  twoid: string | null = ''

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient,
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id')
    this.twoid = this.route.snapshot.paramMap.get('twoid')

    this.http.get(this.url + this.id + '/' + this.twoid).subscribe(res => {
      this.discounts = res
    })
  }

}
