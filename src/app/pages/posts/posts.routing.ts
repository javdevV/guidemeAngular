import { Routes, RouterModule }  from '@angular/router';
import { PostsComponent } from './posts.component';
import { PostComponent } from './components/post.component';
import { addBeacon } from './components/addbeacon.component.ts';
import { dashboardBeacon } from './components/dashboardbeacon.component.ts';
const routes: Routes = [
  {
    path: '',
    redirectTo:'posts',
     pathMatch:'full'
  },
    { path: 'posts', component:PostsComponent },
     { path: 'posts/:id', component:PostComponent },
     { path: 'posts/beacon/addbeacon', component:addBeacon },
      { path: 'posts/beacon/dashboardbeacon', component:dashboardBeacon }
  
];

export const routing = RouterModule.forChild(routes);