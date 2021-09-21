import { TestBed } from '@angular/core/testing';

import { PhytosanitaryService } from './phytosanitary.service';

describe('PhytosanitaryService', () => {
  let service: PhytosanitaryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhytosanitaryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
