import { TestBed } from '@angular/core/testing';

import { User.AuthService } from './user.auth.service';

describe('User.AuthService', () => {
  let service: User.AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(User.AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
