import { Routes, RouterModule }  from '@angular/router';
import { Pages } from './pages.component';
import { ModuleWithProviders } from '@angular/core';
 // noinspection TypeScriptValidateTypes

// export function loadChildren(path) { return System.import(path); };

export const routes: Routes = [
  {
    path: 'login',
    loadChildren: 'app/pages/login/login.module#LoginModule'
  },
  {
    path: 'register',
    loadChildren: 'app/pages/register/register.module#RegisterModule'
  },
  {
    path: 'pages',
    component: Pages,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadChildren: 'app/pages/dashboard/dashboard.module#DashboardModule' },
      { path: 'editors', loadChildren: 'app/pages/editors/editors.module#EditorsModule' },
      { path: 'components', loadChildren: 'app/pages/components/components.module#ComponentsModule' },
      { path: 'charts', loadChildren: 'app/pages/charts/charts.module#ChartsModule' },
      { path: 'ui', loadChildren: 'app/pages/ui/ui.module#UiModule' },
      { path: 'forms', loadChildren: 'app/pages/forms/forms.module#FormsModule' },
      { path: 'tables', loadChildren: 'app/pages/tables/tables.module#TablesModule' },
      { path: 'maps', loadChildren: 'app/pages/maps/maps.module#MapsModule' },
      { path: 'new',  loadChildren: 'app/pages/new/new.module#NewModule' },
      { path: 'interests',  loadChildren: 'app/pages/interests/interests.module#InterestsModule' },
      { path: 'posts',  loadChildren: 'app/pages/posts/posts.module#PostsModule' },
      { path: 'locations',  loadChildren: 'app/pages/locations/locations.module#LocationsModule' },
      { path: 'add-location',  loadChildren: 'app/pages/add-location/add-location.module#AddLocationModule' },
      { path: 'categories',  loadChildren: 'app/pages/categories/categories.module#CategoriesModule' },
      { path: 'tags',  loadChildren: 'app/pages/tags/tags.module#TagsModule' },
      { path: 'trackusers',  loadChildren: 'app/pages/trackusers/trackusers.module#TrackUsersModule' },
      { path: 'loginh',  loadChildren: 'app/pages/loginh/loginh.module#LoginHModule' },
      { path: 'loginv',  loadChildren: 'app/pages/loginv/loginv.module#LoginVModule' }
     ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
