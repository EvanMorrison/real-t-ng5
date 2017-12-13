import { Component, OnInit, Input } from '@angular/core';
import { Router, RouterStateSnapshot } from '@angular/router';
import { NgModel, NgForm } from '@angular/forms';
import { Case } from '../../case';

@Component({
  selector: 'rt-drawer-content',
  templateUrl: './drawer-content.component.html',
  styleUrls: ['./drawer-content.component.scss']
})
export class DrawerContentComponent implements OnInit {
  @Input() cases: Case[];
  query: string;

  constructor() { }

  ngOnInit() {
  }

  

}
