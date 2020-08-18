import { Injectable } from '@angular/core';
import { Room } from './room';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class MessageService {

  constructor(private http: HttpClient) { }

  getRooms(parametro: number): Observable<Room> {
    var url: string;
    url = "https://us-south.functions.appdomain.cloud/api/v1/web/7ad9fcc4-9f77-43bc-a3cf-a1eb302381a5/ibmcloud/sequence-read-cloudant.json?id=" + parametro;
    console.log("url", url);
    return this.http.get<Room>(url)
      .pipe(
        tap(_ => console.log('fetched cloudant'))
      );

  }
}
