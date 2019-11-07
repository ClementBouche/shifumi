import { TestBed } from '@angular/core/testing';

import { EventViewResolverService } from './event-view-resolver.service';

describe('EventViewResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EventViewResolverService = TestBed.get(EventViewResolverService);
    expect(service).toBeTruthy();
  });
});
