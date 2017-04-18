import {Component} from '@angular/core';
import { AgmCoreModule } from 'angular2-google-maps/core';
@Component({
  selector: 'new',
  template: `ok`
})

export class NewComponent {
title: string = 'My first angular2-google-maps project';
  zoom:number=12;
 streetViewControl :boolean=true;
 backgroundColor:string="#E6E6E6";
lat:number=48.854624;
lng:number=2.324209;


  constructor() {}
}