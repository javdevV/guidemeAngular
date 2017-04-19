import { Routes, RouterModule }  from '@angular/router';
import { TagsComponent } from './tags.component';

const routes: Routes = [
  {
    path: '',
    component: TagsComponent
  }
];

export const routing = RouterModule.forChild(routes);