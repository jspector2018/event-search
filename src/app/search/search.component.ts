import { Component, OnInit } from '@angular/core';
import { CommonModule } from "@angular/common";
import {catchError, of, Subject} from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { EventsService} from "../events.service";
import {Page} from "../page";
import {Event} from "../event";
import {FilterComponent} from "../filter/filter.component";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FilterComponent, FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent implements OnInit {
  private eventSubject = new Subject<string>();
  responseArray: any[] = [];

  events$: any;
  constructor(public eventsService: EventsService) {}

  ngOnInit(): void {
    this.events$ = this.eventSubject.pipe(
      // provide stable values after x milliseconds without user input
      debounceTime(1000),
      // skip repeat values
      distinctUntilChanged(),
      // Handle race conditions
      switchMap(eventText => this.eventsService.getLiveResults(eventText)),
      catchError(err => of('There was an issue connecting to the Ticketmaster API'))
    ).subscribe(events => {
      this.eventsService.events = [];
      this.eventsService.page = events?.page?.number;
      this.eventsService.totalPages = events?.page?.totalPages;
      this.eventsService.totalElements = events?.page?.totalElements;
      this.eventsService.pageSize = events?.page?.size;
      this.responseArray = events._embedded.events;
      this.responseArray?.forEach(element => {
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
      console.log("page number" + this.eventsService.page);
      console.log("total pages" + this.eventsService.totalPages);
      console.log("page size" + this.eventsService.pageSize);
      console.log(this.eventsService.events);
    });


  }
  // Triggers when user has entered new, distinct search text
  searchEvents(event)
  {
    console.log(event.target.value);
    console.log("search text: " + this.eventsService.searchText);
    this.eventSubject.next(event.target.value);
  }
  // Update search request with new date range input
  updateSearch(event) {
    console.log("update search with dates" + event);
    this.eventSubject.next(event);
  }
  }
