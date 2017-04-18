import { Routes, RouterModule }  from '@angular/router';
import { CategoriesComponent } from './categories.component';

const routes: Routes = [
  {
    path: '',
    component: CategoriesComponent
  }
];

export const routing = RouterModule.forChild(routes);
