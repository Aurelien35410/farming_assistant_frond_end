import { TestBed } from '@angular/core/testing';

import { ApiInseeService } from './api-insee.service';

describe('ApiInseeService', () => {
  let service: ApiInseeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiInseeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
