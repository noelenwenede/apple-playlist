/**
 * Use a single class for both actions and state since there's only 
 * one state.
 */

import { State, Action, StateContext } from '@ngxs/store';
import { RequestOptionsService } from '../shared/request-options.service';
import { tap, catchError } from 'rxjs/operators';
import { normalize, schema } from 'normalizr';
import { throwError } from 'rxjs';


const itemsSchema = new schema.Entity('items', {}, { idAttribute: 'id' });


export class GetPlaylist {
    static readonly type = '[PLAYLIST] get playlist';
    constructor() {}
}

// state interface
export interface PlayListItem {
    id: String;
    kind: String;
    name: String;
    url: String;
    curator_name: String;
    artwork: String;
}

export interface PlayList {
    name: String;
    content: PlayListItem[];
    loading: boolean;
    items: any;
    ids: string[];
}

@State<PlayList>({
    name: 'app',
    defaults: {
        name: null,
        content: null,
        items: null,
        ids: null,
        loading: false
    }
})
export class AppState {

    constructor(private ros: RequestOptionsService) {}

    @Action(GetPlaylist)
    getPlaylist(ctx: StateContext<PlayList>, action: GetPlaylist) {
        ctx.patchState({
            loading: true
        })

        return this.ros.getPlaylist().pipe(
            tap(res => {
                let data = res.featuredPlaylists;
                /**
                 * Normalised to created a database structure to allow for 
                 * easy edit. 
                 * If not normalised for every modification we need to filter 
                 * through entire array to return the new state of the changed item.a
                 * 
                 * @note - not being used here. I'll use the content array since there's 
                 * no modifications and just 44 items
                 */
                let playlistItems = normalize(data.content, [itemsSchema]);
                ctx.patchState({
                    loading: false,
                    name: data.name,
                    content: data.content,
                    items: playlistItems.entities.items,
                    ids: playlistItems.result
                })
            }),
            catchError(res => {
                // If request fails, reset loading to default
                ctx.patchState({
                    loading: false
                })
                /**
                 * Display api error here
                 * ideally a toast service
                 */
                console.log(res);
                return throwError(res)
            })
        )
    }
}
