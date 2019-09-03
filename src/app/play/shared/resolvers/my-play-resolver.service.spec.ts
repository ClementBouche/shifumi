import { TestBed } from '@angular/core/testing';

import { MyPlayResolverService } from './my-play-resolver.service';

describe('MyPlayResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyPlayResolverService = TestBed.get(MyPlayResolverService);
    expect(service).toBeTruthy();
  });
});
