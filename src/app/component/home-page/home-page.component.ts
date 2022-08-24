import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  bid: string | null = localStorage.getItem('b_u_id')
  constructor() { }

  ngOnInit(): void {
  }

}
