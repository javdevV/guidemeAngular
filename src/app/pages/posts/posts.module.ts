import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { PostsComponent } from './posts.component';
import { routing } from './posts.routing';
import { PostsService } from './posts.service';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgaModule } from '../../theme/nga.module';
import { PostComponent } from './components/post.component.ts';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { addBeacon } from './components/addbeacon.component.ts';
import { FormsModule } from '@angular/forms';
import { dashboardBeacon } from './components/dashboardbeacon.component.ts';
import { UpdateBeacon } from './components/updatebeacon.component.ts';
// import { ChartsModule } from 'ng2-charts';
// import '../../../../node_modules/chart.js/src/chart.js';
@NgModule({
  imports: [
    CommonModule,
    routing,
    Ng2SmartTableModule,
    NgaModule,
    FormsModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyBwQa0LEvba1MplMu9wHOyi5lso5b_x0eM' })
    
    
  ],
  declarations: [
    PostsComponent,
    PostComponent,
    addBeacon,
    dashboardBeacon,
    UpdateBeacon
  ],
  providers:[PostsService]
})
export class PostsModule {}