import { TestBed, inject } from '@angular/core/testing';

import { UnauthGuard } from './unauth.guard';

describe('UnauthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UnauthGuard]
    });
  });

  it('should ...', inject([UnauthGuard], (guard: UnauthGuard) => {
    expect(guard).toBeTruthy();
  }));
});
