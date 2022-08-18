import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-level-two',
  templateUrl: './level-two.component.html',
  styleUrls: ['./level-two.component.scss']
})
export class LevelTwoComponent implements OnInit {

  url: string = 'https://administrator.goodyellowco.com/api/level/two/'
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
      this.leaderboards = res
    })
  }

}
