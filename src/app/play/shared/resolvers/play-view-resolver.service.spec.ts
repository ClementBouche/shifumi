import { TestBed } from '@angular/core/testing';

import { PlayViewResolverService } from './play-view-resolver.service';

describe('PlayViewResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlayViewResolverService = TestBed.get(PlayViewResolverService);
    expect(service).toBeTruthy();
  });
});
