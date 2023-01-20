import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { tap, Observable } from "rxjs";
import {Event} from "../model/event.model";
import {User} from "../model/user.model";

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
      // tap(data => console.log(data))
    );
  }

  public getEventById(id: string): Observable<Event> {
    return this.http.get<Event>(this.eventsUrl+'/'+id).pipe(
      // tap(data => console.log(data))
    );
  }

  public attendEvent(id: string, event: Event, idParticipant: string): Observable<Event> {
    event.noParticipants++;
    console.log("before"+event.participantsId);
    if (event.participantsId) {
    } else {
      event.participantsId = [];
    }
    event.participantsId.push(idParticipant);
    console.log(event.participantsId);
    const body = JSON.stringify(event);
    return this.http.put<Event>(
      this.eventsUrl+'/update/'+id,
      body,
      { headers: { 'Content-Type': 'application/json' } }
    );
  }

  unattendEvent(id: string, event: Event, idParticipant: string) {
    event.noParticipants--;
    const index = event.participantsId.indexOf(idParticipant, 0);
    if (index > -1) {
      event.participantsId.splice(index, 1);
    }
    const body = JSON.stringify(event);
    return this.http.put<Event>(
      this.eventsUrl+'/update/'+id,
      body,
      { headers: { 'Content-Type': 'application/json' } }
    );
  }
}
