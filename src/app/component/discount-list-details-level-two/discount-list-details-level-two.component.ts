import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-discount-list-details-level-two',
  templateUrl: './discount-list-details-level-two.component.html',
  styleUrls: ['./discount-list-details-level-two.component.scss']
})
export class DiscountListDetailsLevelTwoComponent implements OnInit {

  url: string = 'https://administrator.goodyellowco.com/api/discount/list/details/two/'
  loading: boolean = false
  discounts: any = []
  id: string | null = ''
  oneid: string | null = ''

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient,
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id')
    this.oneid = this.route.snapshot.paramMap.get('oneid')

    this.http.get(this.url + this.id + '/' + this.oneid).subscribe(res => {
      this.discounts = res
    })
  }

}
