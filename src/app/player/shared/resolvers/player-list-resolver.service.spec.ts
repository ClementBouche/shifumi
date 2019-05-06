import { TestBed } from '@angular/core/testing';

import { PlayerListResolverService } from './player-list-resolver.service';

describe('PlayerListResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlayerListResolverService = TestBed.get(PlayerListResolverService);
    expect(service).toBeTruthy();
  });
});
