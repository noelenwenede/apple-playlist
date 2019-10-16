import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HostComponent } from './host/host.component';
import { ModalComponent } from './modal/modal.component';
import { ModalDirective } from './modal.directive';
import { ModalService } from './modal.service';



@NgModule({
  declarations: [
    HostComponent, 
    ModalComponent, 
    ModalDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HostComponent, 
    ModalComponent, 
    ModalDirective
  ],
  providers: [
    ModalService
  ],
  entryComponents: [
    HostComponent, 
    ModalComponent
  ]
})
export class ModalModule { }
