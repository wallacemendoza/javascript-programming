import { TestBed } from '@angular/core/testing';

import { CountryInfo } from './country-info';

describe('CountryInfo', () => {
  let service: CountryInfo;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountryInfo);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
