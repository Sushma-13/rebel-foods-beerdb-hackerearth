import { TestBed } from '@angular/core/testing';

import { BeerBrandService } from './beer-brand.service';

describe('BeerBrandService', () => {
  let service: BeerBrandService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BeerBrandService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
