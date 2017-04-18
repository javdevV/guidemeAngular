import { Routes, RouterModule }  from '@angular/router';
import { TrackUsersComponent } from './trackusers.component';

const routes: Routes = [
  {
    path: '',
    component: TrackUsersComponent
  }
];

export const routing = RouterModule.forChild(routes);