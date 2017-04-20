import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { LoginVComponent} from './login.component';
import { routing } from './loginv.routing';
import {AutheService} from './authservice';
import { NgaModule } from '../../theme/nga.module';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    routing,
    NgaModule,
    FormsModule
  ],
  declarations: [
    LoginVComponent
  ],
  providers : [AutheService]
})
export class LoginVModule {}
