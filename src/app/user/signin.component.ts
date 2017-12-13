import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './auth.service';

import 'rxjs/add/operator/catch';

@Component({
  selector: 'rt-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SignInComponent implements OnInit {
  showSignIn = true;
  waiting = false;

  constructor(private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  signIn(event): void {
    this.waiting = true;
    event.stopPropagation();
    console.log('signing in');
    this.authService.signIn('evan@email.com', 'evan')
    .subscribe(data => {
      this.waiting = false;
      if (this.authService.isSignedIn()) {
        this.router.navigate(['/home']);
      }
      else {
        console.log('problem logging in ', data);
      }
    }, err => {
      this.waiting = false;
      console.log('login error ', err);
    })
  }

}
