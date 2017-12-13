import { TestBed, inject } from '@angular/core/testing';

import { CaseResolverService } from './case-resolver.service';

describe('CaseResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CaseResolverService]
    });
  });

  it('should be created', inject([CaseResolverService], (service: CaseResolverService) => {
    expect(service).toBeTruthy();
  }));
});
