import { Component } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd,
         NavigationCancel, NavigationError } from '@angular/router';
import { RouterEvent } from '@angular/router/src/events';

@Component({
  selector: 'rt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loading: boolean = false;

  constructor(private router: Router) { 

    router.events.subscribe((routerEvent: Event) => this.checkRouterEvent(routerEvent))
  }

  checkRouterEvent(event: Event): void {

    if (event instanceof NavigationStart) this.loading = true;
    if (event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError) {
          this.loading = false;
        }
  }
  
}
