import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatDatepickerInputEvent, MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'
import {EventsService} from "../events.service";
import {DatePipe} from "@angular/common";
import {formatDate} from "../../Utils/functions";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [MatFormFieldModule, MatDatepickerModule, MatInputModule, FormsModule],
  providers: [provideNativeDateAdapter()],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss'
})
export class FilterComponent {
  constructor(public eventsService: EventsService) {
  }
  @Output() dateChange: EventEmitter<any> = new EventEmitter();
  title = "filter component"

  // emit updated start date event
  startDateEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    console.log(`${type}: ${event.value}`);
    // if(event.value !== null && this.eventsService.endDate !== null) {
      this.eventsService.startDate = event.value;
      console.log("formatted start date: " + formatDate(event.value, '01'));
      // this.dateChange.emit(event.value);
    // }
    console.log("service start date value: " + this.eventsService.startDate);
  }
  // emit updated end date event
  endDateEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    console.log(`${type}: ${event.value}`);
    if(event.value !== null && this.eventsService.startDate !== null) {
      this.eventsService.endDate = event.value;
      console.log("formatted end date: " + formatDate(event.value, '23'));
      this.dateChange.emit(event.value);
    }
    console.log("service end date value: " + this.eventsService.endDate);
  }
}
