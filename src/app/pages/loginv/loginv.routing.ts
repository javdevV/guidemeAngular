import { Routes, RouterModule }  from '@angular/router';
import { LoginVComponent} from './login.component';

const routes: Routes = [
  {
    path: '',
   redirectTo:'loginv',
     pathMatch:'full'
  }
];

export const routing = RouterModule.forChild(routes);
