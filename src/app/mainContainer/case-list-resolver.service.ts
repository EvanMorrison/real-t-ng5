import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Case } from './case';
import { CaseService } from './case.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';


@Injectable()
export class CaseListResolver implements Resolve<Case[]> {

  constructor(private caseService: CaseService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Case[]> {
    return this.caseService.getThinList().map(caselist => {
      if (caselist && caselist.length) {
        return caselist
      }
      console.log(`Could not retrieve case list`);
      return null;
    })
    .catch(err => {
      console.log(`Error retrieving product list: ${err}`)
      return Observable.of(null);
    })
  }

}
