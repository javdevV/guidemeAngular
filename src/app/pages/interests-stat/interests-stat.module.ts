import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { InterestsStatComponent } from './interests-stat.component';
import { routing } from './interests-stat.routing';
import { AmChartsModule } from "amcharts3-angular2";
import { InterestsService } from "../interests/interests.service";


@NgModule({
  imports: [
    CommonModule,
    routing,
    AmChartsModule
   ],
  declarations: [
    InterestsStatComponent
  ],providers:[InterestsService]
})
 export class interestsStatModule {}
 