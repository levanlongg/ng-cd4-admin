import { TestBed } from '@angular/core/testing';

import { AdBillSaleService } from './ad-bill-sale.service';

describe('AdBillSaleService', () => {
  let service: AdBillSaleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdBillSaleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
