import { TestBed } from '@angular/core/testing';

import { ServAuthentificationService } from './serv-authentification.service';

describe('ServAuthentificationService', () => {
  let service: ServAuthentificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServAuthentificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
