import { TestBed } from '@angular/core/testing';

import { LoginOrNotGuardService } from './login-or-not-guard.service';

describe('LoginOrNotGuardService', () => {
  let service: LoginOrNotGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginOrNotGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
