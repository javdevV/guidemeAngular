import {Component,OnInit,ElementRef } from '@angular/core';
import { PostsService } from '../posts.service';
import {ActivatedRoute,Router,Params} from '@angular/router';

@Component({
  selector: 'app-addbeacon',
  templateUrl: './docsbeacon.component.html',
  styleUrls: ['./docsbeacon.component.css']
})

export class docsBeacon implements OnInit {
   pdfSrc: string = '/pdf-test.pdf';
  page: number = 1;
 
  constructor(private postsService: PostsService,private route : ActivatedRoute,private router:Router) { }

  ngOnInit(){

}




}
