import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterStateSnapshot} from '@angular/router';

import { CaseResolver } from '../../case-resolver.service';

import { Case } from '../../case';

@Component({
  selector: 'rt-case-focus',
  templateUrl: './case-focus.component.html',
  styleUrls: ['./case-focus.component.scss']
})
export class CaseFocusComponent implements OnInit {
  cr: Case;

  constructor(private route: ActivatedRoute,
              private caseResolver: CaseResolver) {
   }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.cr = data['caseRecord'];
    })
  }

}
