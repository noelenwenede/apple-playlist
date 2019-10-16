import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from '../modal.directive';

@Component({
  selector: 'modal-host-component',
  templateUrl: './host.component.html',
  styleUrls: ['./host.component.sass']
})
export class HostComponent implements OnInit {

  @ViewChild(ModalDirective, { static: true }) modalhost: ModalDirective;

  constructor() { }

  ngOnInit() {
  }

}
