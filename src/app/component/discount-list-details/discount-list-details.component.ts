import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-discount-list-details',
  templateUrl: './discount-list-details.component.html',
  styleUrls: ['./discount-list-details.component.scss']
})

export class DiscountListDetailsComponent implements OnInit {

  //url: string = 'https://administrator.goodyellowco.com/api/discount/list/details/'

  url: string = 'https://administrator.goodyellowco.com/api/level/one/discount/'



  loading: boolean = false
  discounts: any = []
  id: string | null = ''
  min: string | null = ''
  max: string | null = ''
  title: string = ''

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient,
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id')
    this.min = this.route.snapshot.paramMap.get('min')
    this.max = this.route.snapshot.paramMap.get('max')

    this.http.get(this.url + this.id + '/' + this.min + '/' + this.max).subscribe((res: any) => {
      this.discounts = res
      // this.title = res
    })
  }

}
