import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {

  constructor(private http: Http) { }

 
  Login() {
    return this.http.get('http://localhost:3000/auth/local')
      .map(res => res.json());
  }




}