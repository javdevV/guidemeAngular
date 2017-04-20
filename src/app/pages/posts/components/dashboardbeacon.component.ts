import {Component,OnInit,ElementRef } from '@angular/core';
import { PostsService } from '../posts.service';
import {ActivatedRoute,Router,Params} from '@angular/router';

@Component({
  selector: 'app-addbeacon',
  templateUrl: './dashboardbeacon.component.html',
  styleUrls: ['./dashboardbeacon.component.css']
})

export class dashboardBeacon implements OnInit {
 num:number;
 num1:number;
 num2:number;
  constructor(private postsService: PostsService,private route : ActivatedRoute,private router:Router) { }

  ngOnInit(){
  
this.postsService.CountBeacons().subscribe(num => {
      this.num = num;
      console.log(this.num)
    });

this.postsService.CountAllBeacons().subscribe(num1 => {
      this.num1 = num1;
      console.log(this.num1)
    });
}

public doughnutChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData:number[] = [350, 450, 100];
  public doughnutChartType:string = 'doughnut';
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }

// public byaddress(address:string){
// this.postsService.Beaconsbyplace(address).subscribe(num2 => {
//       this.num2 = num2;
//       console.log(this.num2)
//     });

// }



}
