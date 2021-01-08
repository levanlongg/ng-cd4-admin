import { TestBed } from '@angular/core/testing';

import { AdImportInvoiceService } from './ad-import-invoice.service';

describe('AdImportInvoiceService', () => {
  let service: AdImportInvoiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdImportInvoiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
