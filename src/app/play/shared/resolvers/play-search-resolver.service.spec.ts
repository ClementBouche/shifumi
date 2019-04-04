import { TestBed } from '@angular/core/testing';

import { PlaySearchResolverService } from './play-search-resolver.service';

describe('PlaySearchResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlaySearchResolverService = TestBed.get(PlaySearchResolverService);
    expect(service).toBeTruthy();
  });
});
