import { Component, OnInit } from '@angular/core';
import { InterestsService } from './interests.service';

@Component({
	selector: 'app-interests',
	templateUrl: './interests.component.html',
	styleUrls: ['./interests.component.css']
})
export class InterestsComponent implements OnInit {

	interests: any [] = [];
	inte = {};
	label: String;
	pos:number;

	public doughnutChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData:number[] = [350, 450, 100];
  public doughnutChartType:string = 'doughnut';

	constructor(private intService: InterestsService) { }

  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
  
	ngOnInit() {
		// Retrieve posts from the API
		this.intService.getAllInterests().subscribe(ints => {
			this.interests = ints;
			console.log(this.interests);
		});
		this.interests.push({label:"WASSIM"});
	}
	save(id){
		/*	this.inte.label=this.label;*/
		if(id== null){
			this.intService.postInterest(this.inte).subscribe(a=>{
				this.inte=a;
				this.interests.push(a);
				//location.reload();
			});
		}else {
			this.intService.editInterest(this.inte,id).subscribe(a=>{
				this.interests
				this.inte=a;
				//location.reload();
			});
		}
		this.inte={};
	}
	editer(event,id){
		this.intService.getById(id).subscribe(a=>{
			this.inte=a;
			this.label=a.label;
		});
		console.log(JSON.stringify(this.inte));
		this.pos =this.interests.findIndex(it=>it.label==this.label);
		console.log(this.interests[this.pos]);
	}
	supprimer(event,id){
		 this.intService.deleteInterest(id).subscribe(a=>{
		 	if (a.deleted==true)
		 	location.reload();
		 	else 
		 		console.log("delete failed");
		 });
	}
}