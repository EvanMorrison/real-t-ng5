import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Case } from '../case';

@Component({
  selector: 'rt-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
cases: Case[];

  constructor(private route: ActivatedRoute) { 
    
  }

  ngOnInit() {
    this.cases = this.route.snapshot.parent.data['cases'];

    console.log('cases ', this.cases)
  }

}
