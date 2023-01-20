import { Component, OnInit } from '@angular/core';
import {EventService} from "../../service/event.service";
import {Event} from "../../model/event.model";

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  events: Event[] = [];
  loggedInUserId!: string | null;

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.eventService.getEvents().subscribe(
      events => {
        this.events = events;
      }
    );
    this.loggedInUserId = localStorage.getItem('loggedInUserId');
  }

  onAttend(event: Event) {
    this.eventService.attendEvent(event.id, event, this.loggedInUserId!).subscribe();
  }

  hasAttended(event: Event) {
    if (event.participantsId) {
      for (let particpant of event.participantsId) {
        if (particpant == this.loggedInUserId) {
          return true;
        }
      }
    }
    return false;
  }

  onUnattend(event: Event) {
    this.eventService.unattendEvent(event.id, event, this.loggedInUserId!).subscribe();
  }
}
