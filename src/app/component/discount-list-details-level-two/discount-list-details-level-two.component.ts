import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-discount-list-details-level-two',
  templateUrl: './discount-list-details-level-two.component.html',
  styleUrls: ['./discount-list-details-level-two.component.scss']
})
export class DiscountListDetailsLevelTwoComponent implements OnInit {

  // url: string = 'https://administrator.goodyellowco.com/api/discount/list/details/two/'

  url: string = 'https://administrator.goodyellowco.com/api/level/two/discount/'

  loading: boolean = false
  discounts: any = []
  id: string | null = ''
  min: string | null = ''
  max: string | null = ''
  oneid: string | null = ''

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient,
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id')
    this.oneid = this.route.snapshot.paramMap.get('oneid')

    this.min = this.route.snapshot.paramMap.get('min')
    this.max = this.route.snapshot.paramMap.get('max')

    this.http.get(this.url + this.oneid + '/' + this.min + '/' + this.max).subscribe(res => {
      this.discounts = res
    })
  }

}
