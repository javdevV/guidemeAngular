import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { AddLocationComponent } from './add-location.component';
import { routing } from './add-location.routing';
import {LocationsService} from '../locations/locations.service';


import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule,  MapsAPILoader } from 'angular2-google-maps/core';


@NgModule({
  imports: [
    CommonModule,
    routing,  
  ReactiveFormsModule,
      FormsModule,
    AgmCoreModule.forRoot({
 libraries: ["places"],
apiKey: 'AIzaSyCRMaRyNEQQtAe-mI8OWIH0NlswIhz0p_I'
    })
  ],
  declarations: [
    AddLocationComponent

  ],
    providers : [LocationsService]
})
export class AddLocationModule {}