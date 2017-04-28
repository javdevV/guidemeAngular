import { Routes, RouterModule }  from '@angular/router';
import { WeatherItemComponent } from './weather-item.component';

const routes: Routes = [
  {
    path: '',
    component: WeatherItemComponent
  }
];

 export const routing = RouterModule.forChild(routes);
 