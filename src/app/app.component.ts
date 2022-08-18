import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';
import {
  Event,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router
} from '@angular/router';
import { AuthServiceService } from './services/auth-service.service';

import {
  transition,
  trigger,
  query,
  style,
  animate,
  group,
  animateChild
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('myAnimation', [
      transition('* => *', [
        query(
          ':enter',
          [style({ opacity: 0 })],
          { optional: true }
        ),
        query(
          ':leave',
          [style({ opacity: 1 }), animate('0.2s', style({ opacity: 0 }))],
          { optional: true }
        ),
        query(
          ':enter',
          [style({ opacity: 0 }), animate('0.2s', style({ opacity: 1 }))],
          { optional: true }
        )
      ])
    ])

  ] // register the animations

})
export class AppComponent implements OnInit {
  title = 'goodYellow';
  @Output() fireIsLoggedIn: EventEmitter<any> = new EventEmitter<any>();

  loading = false;


  constructor(
    private router: Router,
    private auth: AuthServiceService,
  ) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;

    this.router.events.subscribe((event: Event) => {
      switch (true) {
        case event instanceof NavigationStart: {
          this.loading = true;
          console.log('loading start')
          break;
        }

        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {
          this.loading = false;
          break;
        }
        default: {
          break;
        }
      }
    });


  }

  async ngOnInit() {
    if(localStorage.getItem('token') && localStorage.getItem('email')) {
      let step: string | null = localStorage.getItem('goodyellow_step')
      if(step) {
        this.router.navigate(['vendor-step-' + step])
      }
    }

  }


}
