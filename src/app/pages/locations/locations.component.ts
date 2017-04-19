import { Component, OnInit } from '@angular/core';
import { AgmCoreModule } from 'angular2-google-maps/core';
import {LocationsService} from './locations.service';

@Component({
  selector: 'locations',
    templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {
 locations: any = [];
  streetViewControl :boolean=true;

  lat: number = 48.856614;
  lng: number = 2.352222;
    zoom:number=12;



 // constructor(private firebaseService: FirebaseService) { }
    constructor(private locationsService: LocationsService) {

    }

  // ngOnInit() {
  //   this.firebaseService.getLocations().subscribe(locations => {
  //     console.log(locations);
  //     this.locations = locations;
  //   }, err => { 
  //     console.log(err);
  //   });
  // }

ngOnInit()
{    

this.locationsService.getAllLocation().subscribe(locations=>{

this.locations=locations;

});
}
}
