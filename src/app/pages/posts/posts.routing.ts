import { Routes, RouterModule }  from '@angular/router';
import { PostsComponent } from './posts.component';
import { PostComponent } from './components/post.component';
import { addBeacon } from './components/addbeacon.component.ts';
import { dashboardBeacon } from './components/dashboardbeacon.component.ts';
import { UpdateBeacon } from './components/updatebeacon.component.ts';
const routes: Routes = [
  {
    path: '',
    redirectTo:'posts',
     pathMatch:'full'
  },
    { path: 'posts', component:PostsComponent },
     { path: 'posts/:id', component:PostComponent },
     { path: 'posts/beacon/addbeacon', component:addBeacon },
      { path: 'posts/beacon/dashboardbeacon', component:dashboardBeacon },
      { path: 'posts/beacon/updatebeacon/:id', component:UpdateBeacon }
  
];

export const routing = RouterModule.forChild(routes);