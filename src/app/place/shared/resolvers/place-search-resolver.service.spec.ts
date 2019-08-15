import { TestBed } from '@angular/core/testing';

import { PlaceSearchResolverService } from './place-search-resolver.service';

describe('PlaceSearchResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlaceSearchResolverService = TestBed.get(PlaceSearchResolverService);
    expect(service).toBeTruthy();
  });
});
