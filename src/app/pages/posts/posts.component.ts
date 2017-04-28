import {Component,OnInit,ElementRef } from '@angular/core';
import { PostsService } from './posts.service';
import {ActivatedRoute,Router,Params} from '@angular/router'
import { LocalDataSource } from 'ng2-smart-table';
import * as GoogleMapsLoader from 'google-maps';
import { AgmCoreModule } from 'angular2-google-maps/core';


@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls:['./posts.component.css']
})
export class PostsComponent implements OnInit {
   
   p: number = 1;
 posts: any = [];
  title: string = 'My first angular2-google-maps project';
  zoom:number=12;
 streetViewControl :boolean=true;
 backgroundColor:string="#E6E6E6";
lat:Number=48.854624;
lng:Number=2.324209;
chartData:Object;
public pieChartLabels:string[] = ['Working Beacons', 'Out of Order Beacons'];
  public pieChartData:number[] = [5, 1];
  public pieChartType:string = 'pie';
  constructor(private postsService: PostsService,private route : ActivatedRoute,private router:Router,private _elementRef:ElementRef) { }
 
   

  
  
  ngOnInit() {
this.postsService.getAllPosts().subscribe(posts => {
      this.posts = posts;
    });

  
  }



 ngAfterViewInit() {
 
  }





  

getPost(id){
this.postsService.getPostById(id);
}










deleteBeacon(id) {
  this.postsService.deleteBeacon(id).then((result) => {
    this.router.navigate(['/posts/posts']);
  }, (err) => {
    console.log(err);
  });
}

// oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
// firstDate = Date.now();
// secondDate = new Date(2008,01,22);

// diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));






 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }






getCordinates($event){
console.log($event)

}

















}