import { TestBed } from '@angular/core/testing';

import { AdHomeService } from './ad-home.service';

describe('AdHomeService', () => {
  let service: AdHomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdHomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
