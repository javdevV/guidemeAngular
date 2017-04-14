import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NavbarComponent } from './navbar/navbar.component';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { RouterModule} from "@angular/router";
import { PostsService } from './posts/posts.service';
import { TagsComponent } from './tags/tags.component';
import { TagsServiceService } from './tags/tags-service.service';
import { CategoriesComponent } from './categories/categories.component';
import { CategoriesService } from './categories/categories.service';

import { AgmCoreModule } from 'angular2-google-maps/core';
import { UsersComponent } from './users/users.component';
import { UsersService} from './users/users.service';
import { InterestsComponent } from './interests/interests.component';
import { InterestsService } from './interests/interests.service';
import { InterestsChartService } from './interests-chart/interests-chart.service';
import { InterestsChartComponent } from './interests-chart/interests-chart.component';

import { ChartsModule } from 'ng2-charts';

import 'chart.js/src/chart.js';


const ROUTES = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'posts',
    component: PostsComponent
  },
  {
    path : 'tags',
    component : TagsComponent
  },
  {
    path:'categories',
    component : CategoriesComponent
  },
  {
    path:'users',
    component : UsersComponent
  },
   
  {
    path: 'interests',
    component: InterestsComponent
  },
  {
    path: 'interests/stat',
    component: InterestsChartComponent
  }

 ];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InterestsComponent,
    InterestsChartComponent,
    PostsComponent,
    TagsComponent,
    CategoriesComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES), // Add routes to the app
     ChartsModule
  ],
  providers: [PostsService,InterestsService,InterestsChartService],// Add the posts service
  bootstrap: [AppComponent,NavbarComponent]
     AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBv00JLGFXVQg5HzI1V2g6JI2sn1a3S22Q'
    })
  ],
  providers: [PostsService,TagsServiceService,CategoriesService,UsersService,InterestsService,InterestsChartService],
  bootstrap: [AppComponent,NavbarComponent]
 })
export class AppModule { }
