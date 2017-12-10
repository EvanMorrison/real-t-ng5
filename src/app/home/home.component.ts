import { Component, OnInit } from '@angular/core';

// import userservice/authservice

@Component({
  selector: 'rt-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  welcomeMessage: string = 'Signin to begin'
  
  constructor() { }

  ngOnInit() {
  }

}
