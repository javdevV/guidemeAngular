
import { NgModule } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './weather-item.routing';
import { CommonModule }  from '@angular/common';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { WeatherService } from './weather.service';
import { WeatherItemComponent } from './weather-item.component';


@NgModule({
  declarations: [
    WeatherItemComponent,

  ],
  imports: [
     // BrowserModule,
    CommonModule,
       routing, 
    FormsModule,
    HttpModule,
     AgmCoreModule.forRoot({
           libraries: ["places"],
apiKey: 'AIzaSyCRMaRyNEQQtAe-mI8OWIH0NlswIhz0p_I'
    }),
  ],

  providers: [WeatherService],
   // bootstrap: [WeatherItemComponent]
})
export class WeatherItemModule {}



