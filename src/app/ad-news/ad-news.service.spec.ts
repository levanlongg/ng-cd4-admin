import { TestBed } from '@angular/core/testing';

import { AdNewsService } from './ad-news.service';

describe('AdNewsService', () => {
  let service: AdNewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdNewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
