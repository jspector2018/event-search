import {Component, OnInit} from '@angular/core';
import {EventsService} from "../events.service";
import {CommonModule, NgOptimizedImage} from "@angular/common";
import {Event} from "../event";
import {Page} from "../page"
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import {ObservableInput} from "rxjs";

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, InfiniteScrollModule],
  templateUrl: './event-list.component.html',
  styleUrl: './event-list.component.scss'
})
export class EventListComponent implements OnInit {
  responseArray: any[] = [];

  constructor(public eventsService: EventsService) {}

  // ngx-infinite-scroll properties
  // throttle won’t trigger onScroll() until user has not scrolled for x milliseconds
  throttle = 1000;
  // Distance down the page until onScroll() is called. 1 = 90%, 2 = 80%, etc.
  distance = 1;

  ngOnInit(): void {
  // Trigger initial events request when page is first loaded
  this.getEvents();

  }

  getEvents() {
    console.log("starting scroll request on page " + this.eventsService.page);
    this.eventsService
      // Include keyword even if blank and page number in request params
      .getLiveResults(this.eventsService.searchText, ++this.eventsService.page)
      .subscribe(events =>{
        // map new values to global service variables
        this.eventsService.page = events?.page?.number;
        this.eventsService.totalPages = events?.page?.totalPages;
        this.eventsService.totalElements = events?.page?.totalElements;
        this.eventsService.pageSize = events?.page?.size;
        this.responseArray = events?._embedded?.events;
        this.responseArray?.forEach(element => {
          // push new event objects to global events array, mapping to the event interface
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
        console.log(this.eventsService.page);
        console.log(this.eventsService.events);
      });
  }
  // When scroll distance is reached, trigger new paginated request to retrieve next batch of event cards
  onScroll(): void {
    this.getEvents();
  }
}
