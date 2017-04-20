import { Component, OnInit,ElementRef } from '@angular/core';
import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import {LocationsService} from '../locations.service';
import {Router,ActivatedRoute,Params} from '@angular/router';



@Component({
  selector: 'edit-location',
  templateUrl: './edit-location.component.html',
  styleUrls: ['./edit-location.component.css']
})
export class EditLocationComponent implements OnInit {
  location={};
  id;
  title;
  latitude;
  longitude;
  ouverture;
  img;

  constructor(
  	private locationsService:LocationsService,
  	private router:Router,
  	private route:ActivatedRoute
  	) { }

  ngOnInit() {
  	this.id=this.route.snapshot.params['id'];
  	this.locationsService.getLocationDetails(this.id).subscribe(location=>{
  	
		this.title=location.title;
  		this.latitude=location.latitude;
  		this.longitude=location.longitude;
  		this.ouverture=this.ouverture;
  			console.log(location);
  	});
  }

  
  onEditSubmit() {
    this.locationsService.updateLocation(this.id,this.location).then((result) => {
      let id = result['_id'];
      this.router.navigate(['/pages/locations/']);
    }, (err) => {
      console.log(err);
    });
  }


}
