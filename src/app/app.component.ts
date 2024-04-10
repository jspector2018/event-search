import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EventListComponent } from "./event-list/event-list.component";
import { FilterComponent } from "./filter/filter.component";
import { SearchComponent } from "./search/search.component";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, SearchComponent, EventListComponent, FilterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'event-search';
}
