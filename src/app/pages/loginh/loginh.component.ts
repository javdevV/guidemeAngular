import {Component,OnInit} from '@angular/core';
import {LoginHService} from './loginh.service';
@Component({
  selector: 'loginh',
    templateUrl: './loginh.component.html',

})
export class LoginHComponent implements OnInit {
	
	localUser = {email:'',password:''} ;
	  
  constructor(private _service : LoginHService) {
  }
  login() {

        this._service.loginfn(this.localUser).then((res) => {
            if(res)
            	console.log('hello connected')
            //this._router.navigate(['Dashboard']);
            else
            console.log(res);
        })
    }

  ngOnInit() {
   }

}

