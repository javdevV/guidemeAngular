import { Injectable } from '@angular/core';
import {Http,Headers} from "@angular/http";
import 'rxjs/add/operator/map';
@Injectable()
export class LoginHService {

  constructor(private http : Http) { }
    isLoggedin: boolean;


     loginfn(usercreds) {
        this.isLoggedin = false;
        var headers = new Headers();
         headers.append('Content-Type', 'application/json');
      
        return new Promise((resolve) => {
            
        this.http.post(
				        	'http://localhost:9000/auth/local', 
				        	JSON.stringify({"email":usercreds.email,
				        	 "password":usercreds.password}),
				        	{headers: headers}
				        )

        		.subscribe((data) => {
            if(data.json().success) {
                //window.localStorage.setItem('auth_key', data.json().token);
                console.log(data);
                this.isLoggedin = true;}
                resolve(this.isLoggedin)
            }
        )
        
        })
    }

}
