import { Injectable } from '@angular/core';
import {Http,Headers,RequestOptions} from "@angular/http";
import 'rxjs/add/operator/map';
@Injectable()
export class LoginHService {

  constructor(private http : Http) { }
    isLoggedin: boolean;


     loginfn(usercreds) {
        this.isLoggedin = false;
        var headers = new Headers({'Content-Type': 'application/json'});
         let options = new RequestOptions({headers:headers});

        return new Promise((resolve) => {
            // JSON.stringify({"email":usercreds.email,
            //              "password":usercreds.password})
        this.http.post('http://localhost:9000/auth/local', usercreds,options).map(res=>res.json())
        		.subscribe((data) => {
            if(data.token) {
                //window.localStorage.setItem('auth_key', data.json().token);
                console.log(data);
                this.isLoggedin = true;}
                resolve(this.isLoggedin)
            }
        )
        
        })
    }

}
