import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from "../environments/environment";
import { Observable} from "rxjs";
import {Event} from "./event";
import {formatDate} from "../Utils/functions";


@Injectable({
  providedIn: 'root'
})
export class EventsService {
  constructor(private http: HttpClient) {
  }

  // global events array to hold event objects during aggregation
  public events: Event[] = [];
  // global date range variables for use with date-specific queries
  public startDate: Date;
  public endDate: Date;
  // global search text variable to track user input across components
  public searchText = '';
  // global pagination variables
  page = -1;
  totalPages = 0;
  totalElements = 0;
  pageSize = 0;
  // environment variables
  url = environment.TICKETMASTER_URL;
  key = environment.TICKETMASTER_API_KEY;

  // Requests based on user input
  getLiveResults(search: string, page?: number, size?: number): Observable<any> {
    let params = "";
    // concatenate page value with query if present in request params
    if (page) {
      params = params + "&page=" + page;
    }
    // concatenate page size value with query if present in request params
    if (size) {
      params = params + "&size=" + size;
    }
    if (this.startDate) {
      params = params + '&startDateTime=' + formatDate(this.startDate, '01');
    }
    if (this.endDate) {
      params = params + '&endDateTime=' + formatDate(this.endDate, '23');
    }
    // if date range is selected and valid, include dates in query
    console.log('start date in request: ' + formatDate(this.startDate, '01'));
    console.log('end date in request: ' + formatDate(this.endDate, '23'));
    let request = this.http.get(environment.TICKETMASTER_URL + '?apikey=' + environment.TICKETMASTER_API_KEY + '&keyword=' + this.searchText + params);
    try {
      return request;
    } catch (error) {
      console.log("HTTP request to Ticketmaster failed: " + error.message);
    }
  }
}
