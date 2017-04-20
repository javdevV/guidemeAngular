import {Injectable} from '@angular/core';
import { Http ,Headers} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class AutheService {
    isLoggedin: boolean;
     constructor(private _http: Http) {
        
    }
     loginfn(email,password ) {
        this.isLoggedin = false;
        var headers = new Headers();
        // var creds = {'email=' : usercreds.email,'&password=':usercreds.password};
        headers.append('Content-Type', 'application/json');
        //headers.append('Autorization', 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI1OGY3Njc1Nzc5Y2MyYzIyMjhmNGJmYWIiLCJpYXQiOjE0OTI2MTIyNjAsImV4cCI6MTQ5MjYzMDI2MH0.kpGVNnrE15z0f4jO2s_LS3euErvf138MbnQjv2D167Y');
        
        return new Promise((resolve) => {
            
        this._http.post('http://localhost:9000/auth/local', JSON.stringify({"email":email, "password":password}),{headers: headers}).subscribe((data) => {
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