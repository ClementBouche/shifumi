import { TestBed } from '@angular/core/testing';

import { BoardgameService } from './boardgame.service';

describe('BoardgameService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BoardgameService = TestBed.get(BoardgameService);
    expect(service).toBeTruthy();
  });
});
