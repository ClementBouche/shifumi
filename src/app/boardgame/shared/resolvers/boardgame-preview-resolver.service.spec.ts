import { TestBed } from '@angular/core/testing';

import { BoardgamePreviewResolverService } from './boardgame-preview-resolver.service';

describe('BoardgamePreviewResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BoardgamePreviewResolverService = TestBed.get(BoardgamePreviewResolverService);
    expect(service).toBeTruthy();
  });
});
