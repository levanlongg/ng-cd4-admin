import { TestBed } from '@angular/core/testing';

import { AdProducerService } from './ad-producer.service';

describe('AdProducerService', () => {
  let service: AdProducerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdProducerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
