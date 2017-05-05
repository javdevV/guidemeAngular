import { Routes, RouterModule }  from '@angular/router';
import { InterestsStatComponent } from './interests-stat.component';

const routes: Routes = [
  {
    path: '',
    component: InterestsStatComponent
  }
];

 export const routing = RouterModule.forChild(routes);
 