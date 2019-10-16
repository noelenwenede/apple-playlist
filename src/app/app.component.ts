import { Component, OnInit } from '@angular/core';
import { ModalService } from './modal/modal.service';
import { Select, Store } from '@ngxs/store';
import { AppState, PlayList, GetPlaylist, PlayListItem } from './store/app.state';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  @Select(AppState) appState$: Observable<PlayList>;
  currentPage: number = 0;
  itemsPerPage = 12;
  content: PlayListItem[];

  get displayItems$(){
    if(this.content){
      let currentIndex = this.currentPage * this.itemsPerPage;
      return of(this.content.slice(currentIndex, this.itemsPerPage + currentIndex));
    } else {
      return of([])
    }
  }

  get paginatorItems$() {
    if(this.content){
      
    } else {
      return of([])
    }
  }

  get pages$() {
    if(this.content){
      let pages = Math.ceil(this.content.length / this.itemsPerPage);
      let out = [];
      for(let i = 1; i <= pages; i++){
        out.push(i)
      }
      
      return of(out)
      
    } else {
      return of([])
    }
  }

  constructor(private modalService: ModalService, private store: Store) {
  }

  ngOnInit() {
    this.store.dispatch(new GetPlaylist());
    this.appState$.subscribe(d => {
      this.content = d.content;
    })
  }

  showPlayList(item){
    this.modalService.showFrameModal(item)
  }

  next(){
    let length = this.content? this.content.length: 0
    if(!length){
      return
    }

    let itemsBehind = (this.itemsPerPage * this.currentPage) + this.itemsPerPage;

    if(itemsBehind < this.content.length) {
      this.currentPage++
    }
  }

  previous() {
    let length = this.content? this.content.length: 0
    if(!length){
      return
    }

    let itemsBehind = (this.itemsPerPage * this.currentPage) + this.itemsPerPage;

    if(itemsBehind > this.currentPage) {
      this.currentPage--
    }
  }

  goToPage(page){
    this.currentPage = page - 1;
  }


}
