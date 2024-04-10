import { Component, OnInit } from '@angular/core';
import { CommonModule } from "@angular/common";
import {catchError, of, Subject} from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { EventsService} from "../events.service";
import {Page} from "../page";
import {Event} from "../event";

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent implements OnInit {
  private eventSubject = new Subject<string>();
  title = "search component"
  responseArray: any[] = [];
  pages: Page[] = [];
  events$: any;
  constructor(public eventsService: EventsService) {}

  ngOnInit(): void {
    this.events$ = this.eventSubject.pipe(
      // provide stable values after 250 milliseconds without user input
      debounceTime(2000),
      // skip repeat values
      distinctUntilChanged(),
      // Handle race conditions
      // switchMap(eventText => this.eventService.getLiveResults(eventText))
      switchMap(eventText => this.eventsService.getLiveResults(eventText)),
      catchError(err => of('There was an issue connecting to the Ticketmaster API'))
    ).subscribe(events => {
      this.eventsService.events = [];
      this.pages.push({
        size: events?.page?.size,
        totalElements: events?.page?.totalElements,
        totalPages: events?.page?.totalPages,
        number: events?.page?.number
      });
      this.responseArray = events._embedded.events;
      this.responseArray.forEach(element => {
        this.eventsService.events.push({
          name: element?.name,
          startDate: element?.dates?.start?.dateTime,
          performers: element?._embedded?.attractions,
          venue: element?._embedded?.venues[0]?.name,
          link: element?.url,
          picture: element?.images[0]?.url
        });
      });
      console.log(this.responseArray);
      console.log(this.pages);
      console.log(this.eventsService.events);
    });


  }
  searchEvents(event)
  {
    console.log(event.target.value)
    this.eventSubject.next(event.target.value);
  }
  }
