import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { User } from "./user.interface";
@Injectable()
export class AuthService {
email:String;
password:String;
user:User;
  constructor(private http: Http) { }

 
  // Login() {
  //   return this.http.get('http://localhost:3000/auth/local')
  //     .map(res => res.json());
  // }


Login(user) {
     
return new Promise((resolve, reject) => {
        this.http.post('http://localhost:3000/auth/local', user)
          .map(res => res.json())
          
    });




  }
       
  }

}