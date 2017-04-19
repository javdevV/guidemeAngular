import { Component, OnInit } from '@angular/core';
import { InterestsService } from './interests.service';

@Component({
selector: 'app-interests',
templateUrl: './interests.component.html',
styleUrls: ['./interests.component.css']
})
export class InterestsComponent implements OnInit {

interests: any [] = [];
inte = {"label":""};
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
}
reset(event){
	this.inte={"label":""};
	this.pos=-1;
}
save(id){
	/*	this.inte.label=this.label;*/
	if(id== null){
		this.intService.postInterest(this.inte).subscribe(a=>{
			
			this.interests.push(a);
			this.inte={"label":""};
			
		});
	}else {
		console.log("position à editer "+this.pos);
		this.intService.editInterest(this.inte,id).subscribe(a=>{
		this.interests[this.pos].label=this.inte.label;
		this.inte={"label":""};
		});
	}
	
}
editer(event,id){
	this.intService.getById(id).subscribe(a=>{
		this.inte=a;
		this.label=a.label;
		
		this.pos =this.interests.findIndex(it=>it._id==id);
		console.log(this.interests[this.pos]);
	});
	
}
supprimer(event,id){
	this.pos =this.interests.findIndex(it=>it._id==id);
	console.log("position à supp" +this.pos);
	console.log(this.interests[this.pos].label);
	 this.intService.deleteInterest(id).subscribe(a=>{
	 	if (a.deleted==true){
	 		this.interests.splice(this.pos,1);	 		
	 	}	 	
	 	else 
	 		console.log("delete failed");
	 });
}
}