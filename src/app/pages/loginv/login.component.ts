import {Component,OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {AutheService} from './authservice';



@Component({
    selector: 'loginv',
    templateUrl : './login.html'
})

export class LoginVComponent implements OnInit {
    // localUser = {
    //     email: '',
    //     password: ''
    // }
    email : String;
    password : String;
    
    constructor(private service:AutheService, private _router: Router) {
        
    }
    
    login() {
        this.service.loginfn(this.email, this.password).then((res) => {
            if(res)
            this._router.navigate(['Dashboard']);
            else
            console.log(res);
        })
    }
    
    clearfields() {
        this.email = '';
        this.password = '';
    }
     ngOnInit() {
       }
    
}