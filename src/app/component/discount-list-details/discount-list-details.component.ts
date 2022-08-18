import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-discount-list-details',
  templateUrl: './discount-list-details.component.html',
  styleUrls: ['./discount-list-details.component.scss']
})

export class DiscountListDetailsComponent implements OnInit {

  url: string = 'https://administrator.goodyellowco.com/api/discount/list/details/'
  loading: boolean = false
  discounts: any = []
  id: string | null = ''
  title: string = ''

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient,
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id')

    this.http.get(this.url + this.id).subscribe((res: any) => {
      this.discounts = res[0]
      this.title = res[1]
    })
  }

}
