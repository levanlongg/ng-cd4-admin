import { TestBed } from '@angular/core/testing';

import { AdPhotoService } from './ad-photo.service';

describe('AdPhotoService', () => {
  let service: AdPhotoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdPhotoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
