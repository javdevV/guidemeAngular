import {Component,OnInit,ElementRef } from '@angular/core';
import { PostsService } from '../posts.service';
import {ActivatedRoute,Router,Params} from '@angular/router';

@Component({
  selector: 'app-addbeacon',
  templateUrl: './dashboardbeacon.component.html',
  styleUrls: ['./dashboardbeacon.component.css']
})

export class dashboardBeacon implements OnInit {
 
  constructor(private postsService: PostsService,private route : ActivatedRoute,private router:Router) { }

  ngOnInit(){
  

}




}
