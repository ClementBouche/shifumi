import { TestBed } from '@angular/core/testing';

import { BoardgameSearchResolverService } from './boardgame-search-resolver.service';

describe('BoardgameSearchResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BoardgameSearchResolverService = TestBed.get(BoardgameSearchResolverService);
    expect(service).toBeTruthy();
  });
});
