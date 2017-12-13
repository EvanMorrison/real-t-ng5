import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRoute, ActivatedRouteSnapshot, 
         RouterStateSnapshot } from '@angular/router';

import { CaseService } from './case.service';
import { Case } from './case';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class CaseResolver implements Resolve<Case> {

  constructor(private router: Router,
              private caseService: CaseService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Case> {
    let id = route.paramMap.get('id');
    return this.caseService.getCaseByCaseNum(id)
    
  }

}
