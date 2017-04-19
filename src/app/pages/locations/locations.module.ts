import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { LocationsComponent } from './locations.component';
import { routing } from './locations.routing';
import {LocationsService} from './locations.service';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { FormsModule } from '@angular/forms';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgaModule } from '../../theme/nga.module';
import { LocationComponent } from './location/location.component.ts';

// import { AddLocationComponent } from '../add-location/add-location.component.ts';

@NgModule({
  imports: [
    CommonModule,
    routing,  
    Ng2SmartTableModule,
    NgaModule,
    FormsModule,
    AgmCoreModule.forRoot({
 libraries: ["places"],
apiKey: 'AIzaSyCRMaRyNEQQtAe-mI8OWIH0NlswIhz0p_I'
    })
  ],
  declarations: [
LocationsComponent,
// AddLocationComponent,
LocationComponent
  ],
    providers : [LocationsService]
})
export class LocationsModule {}