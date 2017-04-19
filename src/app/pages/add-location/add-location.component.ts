import { Component,  ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';

import { AgmCoreModule, MapsAPILoader } from 'angular2-google-maps/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {LocationsService} from '../locations/locations.service';
import {Router,ActivatedRoute,Params} from '@angular/router';
declare var google: any;


class Marker {
  constructor (

    public lat: number,
        public lng: number,
        public label?: string,

        public draggable: boolean = false) {

  }
}

@Component({
 selector: 'add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.css']
})



export class  AddLocationComponent implements OnInit {
  title:any;
  a:any;
  ouverture:string;
  latitude:any;
  longitude:any;
   setPosition(position){
      this.location = position.coords;
      console.log(this.location);
      }

  public searchControl: FormControl;
  public zoom: number;
  // ouverture:any;
 @ViewChild("search")
  public searchElementRef: ElementRef;
  location={"title":"","longitude":"","latitude":""};


  constructor(
    private LocationsService:LocationsService,
    private router:Router,
   private mapsAPILoader: MapsAPILoader,
   private ngZone: NgZone,

  ) { }

  ngOnInit() {
    this.zoom = 6;
    this.latitude = 36.89938;
    this.longitude = 10.18969;



    //create search FormControl
    this.searchControl = new FormControl();

    //set current position
    this.setCurrentPosition();

    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
    let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
  
});
    // don't put Adress ya taieb 3 heures t7areb féha alors que béch tahsrek fel adresse
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          this.onChange(event,this.a,this.latitude,this.longitude);
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();
console.log(place.formatted_address),
console.log(place.name),
console.log(place.opening_hours),
// console.log(place.opening_hours.open_now)
this.a=place.formatted_address

          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          //set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 12;
          console.log(this.latitude);
          console.log(this.longitude);  
        });
      });

    });
  }


onChange(event,a,latitude,longitude){
  console.log(this.a);
this.location.title=a;
this.location.latitude=latitude;
this.location.longitude=longitude;
}



  private setCurrentPosition() {
      //   if(navigator.geolocation){
      // navigator.geolocation.getCurrentPosition(this.setPosition.bind(this));
      // };
  }
    clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }
  
  mapClicked($event: any) {
    this.markers.push(new Marker (
      $event.coords.latitude,
      $event.coords.longitude
    ));
  }
  
  markerDragEnd(m: Marker, $event: any) {
    console.log('dragEnd', m, $event);
  }
  
  markers: Marker[] = [];



  onAddSubmit(){
    // let location = {
    //   title: this.title,
    //   altitude: this.altitude,
    //   longitude: this.longitude,
    //   ouverture:this.ouverture,

    // }

this.LocationsService.addLocation(this.location).then((result) => {
      let id = result['_id'];
      this.router.navigate(['/pages/locations/']);
    }, (err) => {
      console.log(err);
    });
  }

    // this.LocationService.addLocation(location);

    // this.router.navigate(['locations']);
  }
