import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';
@Injectable()
export class TrackUsersService {
  constructor(private http : Http) { }
  
  loadUsersPosition(){
    return this.http.get('https://guidemeesprit.herokuapp.com/api/usersByPos')
      .map(res => res.json());
  }
}