import { Component, OnInit,ElementRef } from '@angular/core';
import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import {LocationsService} from '../locations.service';
import {Router,ActivatedRoute,Params} from '@angular/router';


@Component({
  selector: 'location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
id :any;
location = {};
img: any;
latitude=this.latitude;
longitude=this.longitude;
  streetViewControl :boolean=true;

constructor(
private locationsService: LocationsService,
private router :Router,
private route:ActivatedRoute
) { }

//   ngOnInit() {
// //get ID 
// this.id = this.route.snapshot.params['id'];

//     this.locationService.getLocationDetails(this.id).subscribe(location=> {
//       this.location = location;
//       console.log(location);

//       // @TODO - Storage Ref
//     });
//   }

// ngOnInit(){
//   this.route.params.subscribe(
//   params => {
//       this.id = params['id'];
//       console.log(this.id);
//   });
  

deleteLocation(id) {
  this.locationsService.deleteLocation(id).then((result) => {
    this.router.navigate(['/pages/locations/']);
  }, (err) => {
    console.log(err);
  });
}

ngOnInit(){
  console.log();
    this.route.params.subscribe(
  params => {
      this.id = params['id'];
      console.log(this.id);
this.location=this.locationsService.getLocationDetails(this.id).subscribe(location=>{
  this.location=location;
});
});
  }
}