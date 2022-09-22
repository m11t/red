import { TestBed } from '@angular/core/testing';

import { PractitionerDetailResolver } from './practitioner-detail.resolver';

describe('PractitionerDetailResolver', () => {
  let resolver: PractitionerDetailResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(PractitionerDetailResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
