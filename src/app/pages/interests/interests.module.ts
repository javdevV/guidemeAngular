import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { interestsComponent } from './interests.component';
import { routing } from './interests.routing';
 import { InterestsService } from './interests.service';
 import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    routing,
    FormsModule
   ],
  declarations: [
    interestsComponent
  ],providers:[
  InterestsService
  ]
})
 export class InterestsModule {}
 