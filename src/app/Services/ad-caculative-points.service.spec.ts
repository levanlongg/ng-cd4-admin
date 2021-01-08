import { TestBed } from '@angular/core/testing';

import { AdCaculativePointsService } from './ad-caculative-points.service';

describe('AdCaculativePointsService', () => {
  let service: AdCaculativePointsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdCaculativePointsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
