import { TestBed } from '@angular/core/testing';

import { SservicesService } from './sservices.service';

describe('SservicesService', () => {
  let service: SservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
