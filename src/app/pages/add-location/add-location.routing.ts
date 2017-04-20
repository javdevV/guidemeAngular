import { Routes, RouterModule }  from '@angular/router';
import { AddLocationComponent } from './add-location.component';

const routes: Routes = [
  {
    path: '',
    component: AddLocationComponent
  }
];

export const routing = RouterModule.forChild(routes);