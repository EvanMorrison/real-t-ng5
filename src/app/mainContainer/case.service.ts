import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Case } from './case';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class CaseService {
  

  constructor(private http: HttpClient) { }
  
  getThinList(): Observable<Case[]> {
    return this.http.get('/api/cases/lightlist')
    .map((data: Case[]) => data)
    .catch(this.handleError);
  }

  getCaseByCaseNum(id: string): Observable<Case> {
    return this.http.get<Case>('/api/cases/caseNum/' + id)
    .first()
    .catch(this.handleError);
  }

  handleError(err): Observable<any> {
    console.error('error in caseService ', err);
    return Observable.throw(err || 'Server error');
  }


}
