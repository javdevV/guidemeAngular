import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { TagsComponent } from './tags.component';
import { routing } from './tags.routing';
import {TagsService} from './tags.service';


@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [
    TagsComponent
  ],
  providers : [TagsService]
})
export class TagsModule {}
