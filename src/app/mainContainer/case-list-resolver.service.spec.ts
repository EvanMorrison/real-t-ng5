import { TestBed, inject } from '@angular/core/testing';

import { CaseListResolver } from './case-list-resolver.service';

describe('CaseListResolver', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CaseListResolver]
    });
  });

  it('should be created', inject([CaseListResolver], (service: CaseListResolver) => {
    expect(service).toBeTruthy();
  }));
});
