import { Injectable, ComponentFactoryResolver, ApplicationRef, Injector, ViewContainerRef, ComponentRef, EmbeddedViewRef } from '@angular/core';
import { HostComponent } from './host/host.component';
import { ModalComponent } from './modal/modal.component';
import { PlayListItem } from '../store/app.state';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private host: ComponentRef<HostComponent>;
  private hostRef: ViewContainerRef;

  constructor(private cfr: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector) {

        this.setUp()

     }


  /**
   * Sets up a view with the modal directive to dynamically attach 
   * views/component to the application
   */
  private setUp() {
    this.host = this.cfr.resolveComponentFactory(HostComponent).create(this.injector);
      this.appRef.attachView(this.host.hostView);
      document.body.appendChild((this.host.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement)
  }

  /**
   * Takes a playlist item url and iframes the apple music site 
   * into the app
   * @param url - the url of the playlist to be displayed
   */
  showFrameModal(item: PlayListItem) {
    this.host.instance.modalhost.viewContainerRef.clear()
    const modalFactory = this.cfr.resolveComponentFactory(ModalComponent);


    let ref = this.host.instance.modalhost.viewContainerRef.createComponent(modalFactory, 0);

    ref.instance.playlist = item;


    ref.instance.close.on("close", function(e){
      ref.destroy()
    });
  }
}
