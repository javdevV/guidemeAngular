import {Component, OnInit} from '@angular/core';
import {TrackUsersService} from './trackusers.service';
import { AgmCoreModule } from 'angular2-google-maps/core';

@Component({
  selector: 'trackusers',
  templateUrl: './trackusers.component.html',
  styleUrls: ['./trackusers.component.css']
})
export class TrackUsersComponent implements OnInit {
  tabs: any;
  title: string;
  lat: number;
  lng: number;
  x:number=36.678418;
  y:number = 10.809007;

  constructor(private us: TrackUsersService) {
    this.ngOnInit();
  }
  ngOnInit() {
    //this.title = 'Users by place';
    this.us.loadUsersPosition().subscribe(tabs => {
      this.lat= tabs[1].pos_latitude;
      this.lng= tabs[1].pos_longitude;
      this.tabs=tabs;
      console.log("xx" + JSON.stringify(tabs[0]));
    });
  }
}
