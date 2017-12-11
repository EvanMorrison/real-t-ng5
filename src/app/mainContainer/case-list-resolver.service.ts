import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { Case } from './case';
import { CaseService } from './case.service';

import { Observable } from 'rxjs/Observable';



@Injectable()
export class CaseListResolverService implements Resolve<string> {

  constructor(private caseService: CaseService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): string {
    return 'Hello from resolver'
  }

}
