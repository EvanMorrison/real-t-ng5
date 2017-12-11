import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError,
         NavigationCancel, ActivatedRoute } from '@angular/router';

import { AuthService } from '../user/auth.service';
import { Case } from './case';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Component({
  selector: 'rt-main-container',
  templateUrl: './main-container.component.html',
  styleUrls: ['./main-container.component.scss']
})
export class MainContainerComponent implements OnInit {
  toolbarTitle: string;
  childShown: string;
  showTBMenuButton = false;

  cases: string; // change to type Case[] when resolver is working

  constructor(private authService: AuthService,
              private router: Router,
              private route: ActivatedRoute) { 

    router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        let childComponent = event.url.split('/')[2];
        console.log('fragment ', childComponent);
        this.setChildTheme(childComponent);
      }
    })
  }
              
  ngOnInit(): void {
    this.cases = this.route.snapshot.data['cases'];
  }


  setChildTheme(childComponent: string): void {
    switch (childComponent) {
      case 'caselist':
        this.toolbarTitle = 'Case List';
        this.showTBMenuButton = false;
        break;
      case 'dashboard':
        this.toolbarTitle = 'Dashboard';
        this.showTBMenuButton = false;
      break;
      case 'casesetup':
        this.toolbarTitle = 'Case Setup'
        this.showTBMenuButton = false;
      }
  }

  onSignOut(): void {
    this.authService.signOut();
    this.router.navigate(['/home']);
  }

}
