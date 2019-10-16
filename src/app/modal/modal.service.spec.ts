import { TestBed } from '@angular/core/testing';

import { ModalService } from './modal.service';
import { ModalComponent } from './modal/modal.component';
import { HostComponent } from './host/host.component';
import { ModalModule } from './modal.module';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

describe('ModalService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [ModalComponent, HostComponent ],
  }).overrideModule(BrowserDynamicTestingModule, {set: {entryComponents: [HostComponent, ModalComponent]}})
  );

  it('should be created', () => {
    const service: ModalService = TestBed.get(ModalService);
    expect(service).toBeTruthy();
  });
});
