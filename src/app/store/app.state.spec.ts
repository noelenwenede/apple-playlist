import { AppState, GetPlaylist, PlayListItem } from './app.state';
import { Store, NgxsModule } from '@ngxs/store';
import { async, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

describe('AppState', () => {
  let store: Store


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [NgxsModule.forRoot([AppState]), HttpClientModule],
  
    }).compileComponents();
    store = TestBed.get(Store);
  }));

  it('It gets playlist content', async () => {
    await store.dispatch(new GetPlaylist()).toPromise();
    store.selectOnce(state => state.app).subscribe(appState => {
      expect(appState.content.length).toBeGreaterThan(0);
    });
  });

});
