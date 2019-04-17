import { TestBed } from '@angular/core/testing';

import { PlayerSearchResolverService } from './player-search-resolver.service';

describe('PlayerSearchResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlayerSearchResolverService = TestBed.get(PlayerSearchResolverService);
    expect(service).toBeTruthy();
  });
});
