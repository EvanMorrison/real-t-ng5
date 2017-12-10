import { Injectable } from '@angular/core';

import { User } from './user';
import { HttpClient, HttpRequest, HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class AuthService {
  user: User;
  redirectUrl: string;
  cachedRequests: HttpRequest<any>[] = [];

  constructor(private http: HttpClient) { }

  isSignedIn(): boolean {
    return !!this.user;
  }

  signIn(email: string, password: string): Observable<any> {
    let user = {email, password };
    return this.http.post('/auth/signin', user)
    .do((response: User) => {
      console.log('signed in: ', response);
      this.user = response;
    })
    .catch(this.handleError);
  }

  signout(): void {
    this.user = null;
  }

  private handleError(error: HttpResponse<any[]>): Observable<any> {
    return Observable.throw(error || 'Server error');
  }


  /**
   *  Auth token methods
   */

  setToken(token: string): void {
    document.cookie = "token=" + token;
  }

  getToken(): string {
    let tokenCookie = document.cookie.replace(/(?:(?:^|.*;\s*)token\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    return tokenCookie;
  }

  removeToken(): void {
    document.cookie = "token= ; max-age=0";
  }

  /**
   *  Cache failed requests caused by expired tokens to resend automatically
   *  after user signs back in.
   */
  
  collectFailedRequest(request: HttpRequest<any>): void {
    this.cachedRequests.push(request);
  }

  retryFailedRequests(): void {
    // retry the requests. this method can
    // be called after the token is refreshed
  }
}
