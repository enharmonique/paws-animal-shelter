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

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
    this.eventService.getEvents().subscribe(
      events => {
        this.events = events;
        console.log(events);
      }
    );
  }

  onAttend() {

  }
}
