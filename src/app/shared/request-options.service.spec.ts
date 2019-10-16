import { TestBed } from '@angular/core/testing';

import { RequestOptionsService } from './request-options.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

describe('RequestOptionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      RequestOptionsService,
      HttpClient
    ],
    imports: [HttpClientModule]
  })
  );

  it('should be created', () => {
    const service: RequestOptionsService = TestBed.get(RequestOptionsService);
    expect(service).toBeTruthy();
  });
});
