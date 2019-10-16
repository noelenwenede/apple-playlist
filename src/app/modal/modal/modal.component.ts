import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'events';
import { PlayListItem } from 'src/app/store/app.state';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.sass']
})
export class ModalComponent implements OnInit {

  /**
   * @var {String} playlist - playlist item
   */
  @Input("playlist") playlist: PlayListItem;

  /**
   * Plain javascript event emitter to listen for events on the component instance.
   * Normally destroyed with the component and does't leave room for memory leaks 
   * like @angular's event emitter.
   * 
   * @var {EventEmitter} close - emits a close event to close the modal
   * 
   * @example
   *  let instance = new ModalComponent();
   *  instance.close.on("close", function(e){
   *    // do something here
   * })
   */
  @Output("close") close: EventEmitter = new EventEmitter()

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
    
  }

  closeModal(){
    this.close.emit("close");
  }

  getSafeUrl(url){
    return this.sanitizer.bypassSecurityTrustResourceUrl(url)
    // return this.sanitizer.bypassSecurityTrustUrl(url)
  }

}
