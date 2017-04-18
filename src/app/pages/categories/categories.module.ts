import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { CategoriesComponent } from './categories.component';
import { routing } from './categories.routing';
import {CategoriesService} from './categories.service'


@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [
    CategoriesComponent
  ],
  providers : [CategoriesService]
})
export class CategoriesModule {}
