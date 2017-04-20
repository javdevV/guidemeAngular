import {Component} from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import { AuthService } from './auth.service';
import 'style-loader!./login.scss';
import { User } from "./user.interface";
@Component({
  selector: 'login',
  templateUrl: './login.html',
})
export class Login {

  public form:FormGroup;
  public email:AbstractControl;
  public password:AbstractControl;
  public submitted:boolean = false;
  user:User;
  constructor(fb:FormBuilder,private authService: AuthService) {
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
this.authService.Login(this.user).then((result) => {
      
     // this.router.navigate(['/posts']);
    }, (err) => {
      console.log(err);
    });


    }
  }
}
