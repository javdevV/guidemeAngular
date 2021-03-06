import {Component} from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import { AuthService } from './auth.service';
import 'style-loader!./login.scss';
import { Router } from '@angular/router';


 @Component({
  selector: 'login',
  templateUrl: './login.html',
})
export class Login {
  localUser = {email:'',password:''} ;

  public form:FormGroup;
  public email:AbstractControl;
  public password:AbstractControl;
  public submitted:boolean = false;

   constructor(fb:FormBuilder,private authService: AuthService,private _router : Router) {
    this.form = fb.group({
      'email': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });

    this.email = this.form.controls['email'];
    this.password = this.form.controls['password'];
  }

  public onSubmit(values:Object):void {
    this.submitted = true;
    if (this.form.valid) {
     console.log(values)
     this.authService.loginfn(this.localUser).then((res) => {
            if(res){
              console.log('hello connected')
              this._router.navigate(['dashboard']);
            }
            else
            console.log("error");
        })


    }
  }
}
