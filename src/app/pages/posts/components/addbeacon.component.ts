import {Component,OnInit,ElementRef } from '@angular/core';
import { PostsService } from '../posts.service';
import {ActivatedRoute,Router,Params} from '@angular/router';

@Component({
  selector: 'app-addbeacon',
  templateUrl: './addbeacon.component.html',
  styleUrls: ['./addbeacon.component.css']
})

export class addBeacon implements OnInit {
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
  
this.uuid="ebefd083-70a2-47c8-9837-e7b5634df557"
console.log(this.uuid)
}

 saveBeacon() {
    this.postsService.AddBeacon(this.beacon).then((result) => {
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
 console.log("latitude :", coords.lat);
    console.log("longitude: ", coords.lng);


}




}
