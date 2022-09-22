import { TestBed } from '@angular/core/testing';

import { PatientDetailResolver } from './patient-detail.resolver';

describe('PatientDetailResolver', () => {
  let resolver: PatientDetailResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(PatientDetailResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
