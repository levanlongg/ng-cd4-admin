import { TestBed } from '@angular/core/testing';

import { AdRevenueStatisticsService } from './ad-revenue-statistics.service';

describe('AdRevenueStatisticsService', () => {
  let service: AdRevenueStatisticsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdRevenueStatisticsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
