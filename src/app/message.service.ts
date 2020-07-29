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
    url = "https://us-south.functions.appdomain.cloud/api/v1/web/82cc6e5f-1457-44aa-8b47-c5010c4e41e3/itau-devops/read-from-cloudant.json?id=" + parametro;
    console.log("url", url);
    return this.http.get<Room>(url)
      .pipe(
        tap(_ => console.log('fetched cloudant'))
      );

  }
}
