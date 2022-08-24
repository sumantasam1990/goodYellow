import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-level-three',
  templateUrl: './level-three.component.html',
  styleUrls: ['./level-three.component.scss']
})
export class LevelThreeComponent implements OnInit {

  //url: string = 'https://administrator.goodyellowco.com/api/level/three/'
  url: string = 'https://administrator.goodyellowco.com/api/claudia/level/three/subscribers/brands/'
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
