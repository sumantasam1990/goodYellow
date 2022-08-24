import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-level-one',
  templateUrl: './level-one.component.html',
  styleUrls: ['./level-one.component.scss']
})
export class LevelOneComponent implements OnInit {

  //url: string = 'https://administrator.goodyellowco.com/api/level/one/'
  url: string = 'https://administrator.goodyellowco.com/api/claudia/level/one/subscribers/brands/'
  loading: boolean = false
  leaderboards: any = []
  id: string | null = ''

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient,
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id')
    this.http.get(this.url + this.id).subscribe(res => {
      console.log(res)
      this.leaderboards = res
    })
  }

}
