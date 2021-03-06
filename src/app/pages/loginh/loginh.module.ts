import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { LoginHComponent } from './loginh.component';
import { routing } from './loginh.routing';
import { LoginHService} from './loginh.service'
 import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    routing,FormsModule
  ],
  declarations: [
    LoginHComponent
  ],
  providers : [LoginHService]
})
export class LoginHModule {}
