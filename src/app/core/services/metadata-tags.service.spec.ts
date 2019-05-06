import { TestBed } from '@angular/core/testing';

import { MetadataTagsService } from './metadata-tags.service';

describe('MetadataTagsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MetadataTagsService = TestBed.get(MetadataTagsService);
    expect(service).toBeTruthy();
  });
});
