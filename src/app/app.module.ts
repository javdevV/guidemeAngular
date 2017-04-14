import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PostsComponent } from './posts/posts.component';
import { PostsService } from './posts/posts.service';
import { InterestsComponent } from './interests/interests.component';
import { InterestsService } from './interests/interests.service';
import { InterestsChartService } from './interests-chart/interests-chart.service';
import { InterestsChartComponent } from './interests-chart/interests-chart.component';

import { ChartsModule } from 'ng2-charts';

import 'chart.js/src/chart.js';
// Define the routes
const ROUTES = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
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
    PostsComponent,
    InterestsComponent,
    InterestsChartComponent
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
})
export class AppModule { }
