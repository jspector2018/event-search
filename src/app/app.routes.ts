import { Routes } from '@angular/router';
import {EventListComponent} from "./event-list/event-list.component";

export const routes: Routes = [
  // {path: '', pathMatch: 'full', redirectTo: 'event-list'},
  {path: 'list', component: EventListComponent}
];
