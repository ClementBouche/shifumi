import { TestBed } from '@angular/core/testing';

import { EventSearchResolverService } from './event-search-resolver.service';

describe('EventSearchResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EventSearchResolverService = TestBed.get(EventSearchResolverService);
    expect(service).toBeTruthy();
  });
});
