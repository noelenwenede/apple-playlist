import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpRequest, HttpEvent, HttpEventType, HttpHeaders } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RequestOptionsService {

  url = "https://portal.organicfruitapps.com/programming-guides/v2/us_en-us/featured-playlists.json";


  constructor(public http: HttpClient) { }


  handleError(res: Response | any | object) {
    let errMsg: string;
    if (res.status == 0) {
      return throwError(
        {
          name: 'Failed to connect server',
          message: "You're not connected to the internet or have a slow internet connection"
        }
      )
    } else {
      return throwError(res.error || res.body);
    }
  }

  getPlaylist(): Observable<any> {
    return this.http.get(this.url).pipe(
      catchError(this.handleError)
    )
  }
}
