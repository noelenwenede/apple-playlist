import { Component, OnInit } from '@angular/core';
import { ModalService } from './modal/modal.service';
import { Select, Store } from '@ngxs/store';
import { AppState, PlayList, GetPlaylist, PlayListItem, UpdateQuery } from './store/app.state';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  providers: [
    Store
  ]
})
export class AppComponent implements OnInit {

  title = "playlist";
  @Select(AppState) appState$: Observable<PlayList>;
  currentPage: number = 0;
  itemsPerPage = 12;
  content: PlayListItem[];

  get displayItems$(): Observable<any[]>{
    if(this.content){
      let currentIndex = this.currentPage * this.itemsPerPage;
      return of(this.content.slice(currentIndex, this.itemsPerPage + currentIndex));
    } else {
      return of([])
    }
  }

  /**
   * Returns an observable array of page numbers
   */
  get pages$(): Observable<any[]> {
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
      if(d.queryString && d.queryString !== ""){
        this.content = d.content.filter((e:any) => (e.name as string).toLowerCase().includes((d.queryString as string).toLowerCase()));
      } else {
        this.content = d.content;
      }
      
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

  search(query){
    this.currentPage = 0;
    this.store.dispatch(new UpdateQuery(query));
  }


}
