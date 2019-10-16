import { TestBed } from '@angular/core/testing';

import { RequestOptionsService } from './request-options.service';

describe('RequestOptionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RequestOptionsService = TestBed.get(RequestOptionsService);
    expect(service).toBeTruthy();
  });
});
