import { TestBed, inject } from '@angular/core/testing';

import { CaseListResolverService } from './case-list-resolver.service';

describe('CaseListResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CaseListResolverService]
    });
  });

  it('should be created', inject([CaseListResolverService], (service: CaseListResolverService) => {
    expect(service).toBeTruthy();
  }));
});
