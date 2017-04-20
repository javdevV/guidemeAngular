import {Component,OnInit,ElementRef } from '@angular/core';
import { PostsService } from '../posts.service';
import {ActivatedRoute,Router,Params} from '@angular/router';

@Component({
  selector: 'app-updatebeacon',
  templateUrl: './update.component.html',
  styleUrls: ['./addbeacon.component.css']
})

export class UpdateBeacon implements OnInit {
 uuid:String;
 posts: any = [];
 post:any;
 id : any ;
 beacon={};
 title: string = 'My first angular2-google-maps project';
  zoom:number=14;
 streetViewControl :boolean=true;
 backgroundColor:string="#E6E6E6";
lat:Number=48.854624;
lng:Number=2.324209;
p1:String;
p2:String;

  constructor(private postsService: PostsService,private route : ActivatedRoute,private router:Router) { }

  ngOnInit(){
  

console.log(this.uuid)
}

 updateBeacon() {
    this.postsService.updateBeacon(this.beacon).then((result) => {
      let id = result['_id'];
      this.router.navigate(['/posts']);
    }, (err) => {
      console.log(err);
    });
  }

getPosition(event: any ) {
  
 let coords = event.coords;
 this.p1=coords.lng;
 this.p2=coords.lat;
 console.log(event)
 console.log("latitude :", coords.lat);
    console.log("longitude: ", coords.lng);


}

getCordinates($event){
console.log($event)

}


}
