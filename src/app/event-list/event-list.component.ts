import {Component, OnInit} from '@angular/core';
import {EventsService} from "../events.service";
import {CommonModule, NgOptimizedImage} from "@angular/common";
import {Event} from "../event";
import {Page} from "../page"

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './event-list.component.html',
  styleUrl: './event-list.component.scss'
})
export class EventListComponent implements OnInit {
  responseArray: any[] = [];
  pages: Page[] = [];
  private title = '';

  constructor(public eventsService: EventsService) {}

  ngOnInit(): void {

  this.title = "List Component"


//   this.eventsService.getJSON().subscribe(data => {
//   this.events = data._embedded.events;
//   this.pages = data.page;
//     console.log(this.events);
//     console.log(this.pages);
// });

    this.eventsService.getJSON().subscribe(events =>{
      this.pages.push({
        size: events?.page?.size,
        totalElements: events?.page?.totalElements,
        totalPages: events?.page?.totalPages,
        number: events?.page?.number
      });
      this.responseArray = events?._embedded?.events;
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
      console.log(this.pages);
      console.log(this.eventsService.events);
    });
  }


}
