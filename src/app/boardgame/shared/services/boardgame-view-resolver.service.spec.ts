import { TestBed } from '@angular/core/testing';

import { BoardgameViewResolverService } from './boardgame-view-resolver.service';

describe('BoardgameViewResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BoardgameViewResolverService = TestBed.get(BoardgameViewResolverService);
    expect(service).toBeTruthy();
  });
});
