import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule,Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './posts/post.component';
import { addBeacon } from './posts/addbeacon.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { ChartsModule } from 'ng2-charts';
import 'chart.js/src/chart.js'
import { PostsService } from './posts/posts.service';


const ROUTES = [
  {
    path: '',
    redirectTo: 'posts',
    pathMatch: 'full'
  },
  {
    path: 'posts',
    component: PostsComponent
  },
  {
    path: 'posts/:id',
    component: PostComponent,
    templateUrl:'./posts/post.component.html'
  },
   {
    path: 'beacons/add',
    component: addBeacon,
    templateUrl:'./posts/post.component.html'
  }
];








@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostComponent,
    addBeacon,  
    NavbarComponent,


  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ChartsModule,
    RouterModule.forRoot(ROUTES),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAL7c9QdPAM76YPaaEBU2TZGuhMVx4GDFI'
    })
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
