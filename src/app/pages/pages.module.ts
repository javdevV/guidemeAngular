import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routing }       from './pages.routing';
import { NgaModule } from '../theme/nga.module';
import {RouterModule, Routes} from '@angular/router';
import { AgmCoreModule,  MapsAPILoader } from 'angular2-google-maps/core';
import { Pages } from './pages.component';

@NgModule({
  imports: [CommonModule, NgaModule, routing],
  declarations: [Pages]
})
export class PagesModule {
}
