import { TestBed } from '@angular/core/testing';

import { PlayerViewResolverService } from './player-view-resolver.service';

describe('PlayerViewResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlayerViewResolverService = TestBed.get(PlayerViewResolverService);
    expect(service).toBeTruthy();
  });
});
