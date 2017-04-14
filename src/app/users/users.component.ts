import {Component, OnInit} from '@angular/core';
import {UsersService} from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  tabs: any;
  title: string;
  lat: number;
  lng: number;
  x:number=51.678418;
  y:number = 7.809007;

  constructor(private us: UsersService) {
    this.ngOnInit();
  }

  ngOnInit() {
    this.title = 'Users by place';
    this.us.loadUsersPosition().subscribe(tabs => {
      this.lat= tabs[0].pos_latitude;
      this.lng= tabs[0].pos_longitude;
      this.tabs=tabs;
      console.log("xx" + JSON.stringify(tabs[0]));
    });
  }
}
