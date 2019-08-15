import { TestBed } from '@angular/core/testing';

import { PlaceViewResolverService } from './place-view-resolver.service';

describe('PlaceViewResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlaceViewResolverService = TestBed.get(PlaceViewResolverService);
    expect(service).toBeTruthy();
  });
});
