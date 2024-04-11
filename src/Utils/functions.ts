import {DatePipe} from "@angular/common";

export function formatDate(dateInput: Date, hour: string) {
  const datepipe: DatePipe = new DatePipe('en-US')
  let formattedDate = datepipe.transform(dateInput, 'yyyy-MM-ddT') + hour + ':00:00Z'
  return formattedDate;
}
