import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[modal-host]'
})
export class ModalDirective {

  /**
   * 
   * @param {ViewContainerRef} viewContainerRef - Used to attach views at runtime
   */
  constructor(public viewContainerRef: ViewContainerRef) { }

}
