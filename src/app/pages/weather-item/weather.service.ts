import { Injectable } from '@angular/core';
import { WEATHER_ITEM} from './weather.data';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { WeatherItem } from './weather-item';

@Injectable()
export class WeatherService {

    constructor(private _http: Http) {}
    
    addWeatherItem(weatherItem: WeatherItem) {
        WEATHER_ITEM.push(weatherItem);
    }

    getWeatherItem() {
        return WEATHER_ITEM;
    }




    // searchWeatherData(city: string): Observable<any> {
    //     return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=' + city  +
    //     '&APPID=c5a9ed04c2df119feb15cf693ae0ae45')
    //         .map(response => response.json())
    //             .catch(error => {
    //                 console.error(error);
    //                 return Observable.throw(error.json())
    //             });

    // }


    searchWeatherData(lat:string,lng:string): Observable<any> {
         let tmpparams = lat + ',' + lng;
        return this._http.get('https://api.darksky.net/forecast/3def28f885984a61ebfd500eb8f8b459/'+ tmpparams)
            .map(response => response.json())
                .catch(error => {
                    console.error(error);
                    return Observable.throw(error.json())
                });

    }




}