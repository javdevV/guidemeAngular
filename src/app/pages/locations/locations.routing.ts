import { Routes, RouterModule }  from '@angular/router';
import { LocationsComponent } from './locations.component';
// import { AddLocationComponent } from '../add-location/add-location.component';
import { LocationComponent } from './location/location.component';
import { EditLocationComponent } from './location/edit-location.component';
const routes: Routes = [
  {
  	path: '',
  	 redirectTo:'locations',
     pathMatch:'full'
    // path: '',
    // component: LocationsComponent
  },
  { path: 'locations', component:LocationsComponent },
     { path: 'locations/:id', component:LocationComponent },
          { path: 'locations/edit/:id', component:EditLocationComponent },
    // { path: 'locations', component:LocationsComponent },
    //  { path: 'location/:id', component:LocationComponent }
     
];

export const routing = RouterModule.forChild(routes);