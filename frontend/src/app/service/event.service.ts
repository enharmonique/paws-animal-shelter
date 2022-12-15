import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { tap, Observable } from "rxjs";
import {Event} from "../model/event.model";

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private eventsUrl: string;

  constructor(private http: HttpClient) {
    this.eventsUrl = 'http://localhost:8080/events';
  }

  public getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(this.eventsUrl).pipe(
      tap(data => console.log(data))
    );
  }

  public getEventById(id: string): Observable<Event> {
    return this.http.get<Event>(this.eventsUrl+'/'+id).pipe(
      tap(data => console.log(data))
    );
  }
}
