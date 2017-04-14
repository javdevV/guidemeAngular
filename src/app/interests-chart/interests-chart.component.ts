import { Component, OnInit } from '@angular/core';
import{InterestsService} from '../interests/interests.service';

@Component({
	selector: 'app-interests-chart',
	templateUrl: './interests-chart.component.html',
	styleUrls: ['./interests-chart.component.css']
})
export class InterestsChartComponent implements OnInit {

	// Doughnut
	public doughnutChartLabels:string[]=[]; //= ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
	Labels:string[]=[]; //= ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
	public doughnutChartData:number[] = [];
	Data:number[] = [];
	public doughnutChartType:string = 'doughnut';

	shown:boolean = false;
	public interests: any [];

	constructor(private intService: InterestsService) {//import{InterestsService} from '../interests/interests.service';
		
	}

	ngOnInit() {
		console.log("entred");
		this.intService.getAllInterests().subscribe(ints => {
			this.interests = ints;
			console.log(ints);

			for(var i =0 ;i< ints.length; i++){
				this.Labels.push(ints[i].label);
				this.intService.usersByInterest(ints[i].label).subscribe(users=>{
					console.log("users.length = ",users.length);
					this.doughnutChartData.push(<number>users.length);

					if(i == ints.length)this.shown = true;
				});
				console.log(this.doughnutChartData);
			}
			console.log(this.doughnutChartLabels.length);
			this.doughnutChartLabels=this.Labels;
			//this.doughnutChartData=this.Data;

		});
		
	}



	// events
	public chartClicked(e:any):void {
		console.log(e);
	}

	public chartHovered(e:any):void {
		console.log(e);
	}
}
