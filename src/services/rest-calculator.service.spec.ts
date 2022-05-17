import { TestBed } from '@angular/core/testing';

import { RestCalculatorService } from './rest-calculator.service';

describe('RestCalculatorService', () => {
  let service: RestCalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestCalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
