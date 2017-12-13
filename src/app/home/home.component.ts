import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import userservice/authservice
import { AuthService } from '../user/auth.service';

@Component({
  selector: 'rt-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  welcomeMessage: string = 'Sign-in to begin'
  
  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
    
  }

  onSignIn() {
    this.router.navigate(['/signin']);
  }

  onSignOut() {
    this.authService.signOut();
    
  }

}
