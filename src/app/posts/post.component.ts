import { Component, OnInit } from '@angular/core';
import { PostsService } from './posts.service';
import {ActivatedRoute,Router,Params} from '@angular/router'
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./posts.component.css']
})

export class PostComponent implements OnInit {
 posts: any = [];  
 post:any;
 id : any ;
 lat:Number=48.854624;
lng:Number=2.324209;
zoom:number=12;

  constructor(private postsService: PostsService,private route : ActivatedRoute,private router:Router) { }

  ngOnInit(){
  this.route.params.subscribe(
  params => {
  		this.id = params['id'];
  		console.log(this.id);
  });


this.post=this.postsService.getPostById(this.id).subscribe(post=>{

  this.post=post;
  console.log(post.state)
	
	});


  
  
}








}
   