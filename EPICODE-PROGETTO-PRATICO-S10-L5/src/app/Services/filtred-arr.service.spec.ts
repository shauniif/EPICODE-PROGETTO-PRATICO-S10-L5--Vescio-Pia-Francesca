import { TestBed } from '@angular/core/testing';

import { FiltredArrService } from './filtred-arr.service';

describe('FiltredArrService', () => {
  let service: FiltredArrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FiltredArrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
