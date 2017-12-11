import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot,RouterStateSnapshot, CanActivate, 
         CanLoad, Router, Route } from '@angular/router';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {

  constructor(private authService: AuthService,
              private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // check if user is signed in
    console.log('canActivate ', true);
    return true;
  }

  canLoad(route: Route): boolean {
    // check if user is signed in
    console.log('canLoad ', true);
    return true;
  }

}
