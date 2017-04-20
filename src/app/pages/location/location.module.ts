import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { LocationComponent } from './location.component';
import { routing } from './location.routing';
import {LocationsService} from '../locations/locations.service';


import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule,  MapsAPILoader } from 'angular2-google-maps/core';


@NgModule({
  imports: [
    CommonModule,
    routing,  
  ReactiveFormsModule,
      FormsModule,

  ],
  declarations: [
    LocationComponent

  ],
    providers : [LocationsService]
})
export class AddLocationModule {}