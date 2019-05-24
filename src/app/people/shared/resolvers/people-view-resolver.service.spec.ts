import { TestBed } from '@angular/core/testing';

import { PeopleViewResolverService } from './people-view-resolver.service';

describe('PeopleViewResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PeopleViewResolverService = TestBed.get(PeopleViewResolverService);
    expect(service).toBeTruthy();
  });
});
