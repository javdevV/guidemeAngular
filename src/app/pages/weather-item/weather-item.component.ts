import { Component,  ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { WeatherItem } from './weather-item';

import { WEATHER_ITEM } from './weather.data';
import { WeatherService } from './weather.service';
import { AgmCoreModule } from 'angular2-google-maps/core';

@Component({
  selector: 'weather-item',
  templateUrl: './weather-item.component.html',
  styleUrls: ['./weather-item.component.css']
})
export class WeatherItemComponent implements OnInit {
  weatherItems: WeatherItem[];
   location = {latitude:String ,longitude:Number};
   pos1:String;
pos2:String;
setPosition(position){

      this.location = position.coords;
      console.log(this.location);
         console.log(this.location.latitude);
          console.log(this.location.longitude);
      }
  lat=this.location.latitude
  lng=this.location.longitude;


  constructor(private _weatherService: WeatherService,private weatherService: WeatherService) {}

getPosition(event: any ) {
  
 let coords = event.coords;
 this.pos1=coords.lat
  this.pos2=coords.lng;
  console.log(event)
 console.log("latitude :", this.pos1);
    console.log("longitude: ",  this.pos2);


}



getCordinates($event){
console.log($event)

}


  ngOnInit(): any {
    this.weatherItems = this._weatherService.getWeatherItem();
    	 if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(this.setPosition.bind(this));
      };
   
  }
   // onSubmit(value: any) {
   //      this.weatherService.searchWeatherData(value.city)
   //          .subscribe(
   //              data => {
   //                  const weatherItem = new WeatherItem(data.name, data.weather[0].description, 
   //                                                          Math.round(((data.main.temp - 273.15) * (9/5) + 32)*100)/100, data.main.humidity, data.sys.sunset);
   //                  this.weatherService.addWeatherItem(weatherItem);
   //              }
                 
   //          );        
            
   //  }


      onSubmit(value: any) {
        this.weatherService.searchWeatherData(value.lat,value.lng)
            .subscribe(
                data => {
                    const weatherItem = new WeatherItem(data.currently.summary, data.timezone, data.currently.temperature,
                                data.currently.windSpeed,data.currently.humidity,data.hourly.summary);
                    this.weatherService.addWeatherItem(weatherItem);
                    console.log(weatherItem);
                }

                 
            );        
            
    }




}



