import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxsModule } from '@ngxs/store';
import { AppState } from './app.state';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxsModule.forRoot([AppState])
  ],
  exports: [
    NgxsModule
  ]
})
export class StoreModule { }
