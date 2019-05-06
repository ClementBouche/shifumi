import { TestBed } from '@angular/core/testing';

import { PlayListResolverService } from './play-list-resolver.service';

describe('PlayListResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlayListResolverService = TestBed.get(PlayListResolverService);
    expect(service).toBeTruthy();
  });
});
