import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

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


const ROUTES = [
  {
    path: '',
    redirectTo: 'tags',
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
  }

];

@NgModule({
  declarations: [
    AppComponent,
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
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBv00JLGFXVQg5HzI1V2g6JI2sn1a3S22Q'
    })
  ],
  providers: [PostsService,TagsServiceService,CategoriesService,UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
