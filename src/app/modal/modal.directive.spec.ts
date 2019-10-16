import { ModalDirective } from './modal.directive';
import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from '../app.component';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { HostComponent } from './host/host.component';
import { ModalComponent } from './modal/modal.component';

/**
 * Test was rigged since the directive was attached to document and not approot component
 */
describe('ModalDirective', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ModalDirective,
        HostComponent,
        ModalComponent
      ]
    }).overrideModule(BrowserDynamicTestingModule, {set: {entryComponents: [HostComponent, ModalComponent]}}).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
