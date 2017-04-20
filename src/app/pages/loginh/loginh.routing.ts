import { Routes, RouterModule }  from '@angular/router';
import { LoginHComponent } from './loginh.component';

const routes: Routes = [
  {
    path: '',
    component: LoginHComponent
  }
];

export const routing = RouterModule.forChild(routes);
