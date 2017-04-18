import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { TrackUsersComponent } from './trackusers.component';
import { routing } from './trackusers.routing';
import {TrackUsersService} from './trackusers.service';
import { AgmCoreModule } from 'angular2-google-maps/core';


@NgModule({
  imports: [
    CommonModule,
    routing,
	AgmCoreModule.forRoot({apiKey: 'AIzaSyBv00JLGFXVQg5HzI1V2g6JI2sn1a3S22Q' }),

  ],
  declarations: [
    TrackUsersComponent
  ],
  providers : [TrackUsersService]
})
export class TrackUsersModule {}




