import { Routes, RouterModule }  from '@angular/router';
import { LocationsComponent } from './locations.component';

const routes: Routes = [
  {
    path: '',
    component: LocationsComponent
  }
];

export const routing = RouterModule.forChild(routes);