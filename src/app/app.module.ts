import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ModalModule } from './modal/modal.module';
import { StoreModule } from './store/store.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ModalModule,
    StoreModule,
    SharedModule
  ],
  providers: [], 
  bootstrap: [AppComponent] 
})
export class AppModule { }
