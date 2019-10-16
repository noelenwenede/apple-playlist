import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Observable } from 'rxjs';
import { ModalModule } from './modal/modal.module';
import { StoreModule } from './store/store.module';
import { HttpClientModule } from '@angular/common/http';
import { Store, NgxsModule, StateStream } from '@ngxs/store';
import { AppState } from './store/app.state';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';

/**
 * Test failure is related to NgXs module
 */
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        ModalModule,
        StoreModule,
        HttpClientModule,
        NgxsModule
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'playlist'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('playlist');
  });

  it(`should have currentPage equal to 0`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app: AppComponent = fixture.debugElement.componentInstance;
    expect(app.currentPage).toEqual(0);
  })

  it(`should have currentPage equal to 0`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app: AppComponent = fixture.debugElement.componentInstance;
    expect(app.itemsPerPage).toEqual(12);
  })

});
