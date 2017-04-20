import { Routes, RouterModule }  from '@angular/router';
import { LocationComponent } from './location.component';

const routes: Routes = [
  {
    path: '',
    component: LocationComponent
  }
];

export const routing = RouterModule.forChild(routes);