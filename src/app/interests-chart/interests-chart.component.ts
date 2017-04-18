import { Component, OnInit } from '@angular/core';
import{InterestsService} from '../interests/interests.service';
import { ViewChild} from "@angular/core";
import { Chart } from 'ng2-chartjs2';
@Component({
	selector: 'app-interests-chart',
	templateUrl: './interests-chart.component.html',
	styleUrls: ['./interests-chart.component.css']
})
export class InterestsChartComponent implements OnInit {

	// Doughnut
	public doughnutChartLabels:string[]=[]; //= ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
	Labels:string[]=[]; //= ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
	public doughnutChartData:number[] = [2];
	Data:number[] = [];
	public doughnutChartType:string = 'doughnut';

	shown:boolean = false;
	public interests: any ;
	//@ViewChild("mycanvas") public mycanvas;


	 labels: string[] = ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"];
  data: Chart.Dataset[] = [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
        'rgba(255,99,132,1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
    }
  ];




	constructor(private intService: InterestsService) {//import{InterestsService} from '../interests/interests.service';
		console.log("entred");

		this.intService.getAllInterests().subscribe((ints) => {
      //let id = result['_id'];
      this.interests = ints;
			console.log(ints);
			//this.doughnutChartData=[];
			this.data[0].data=[];

			for(var i=0;i<ints.length;i++){
				this.Labels.push(ints[i].label);

				this.intService.usersByInterest(ints[i].label).subscribe(users=>{
					//console.log("users.length = ",users.length);
					//console.log("le type"+ typeof(users.length));
					this.data[0].data.push(<number>JSON.parse(users.length));
					console.log("i"+i);
				console.log("shown"+this.shown);
				if(i == ints.length){
					this.shown = true;
					console.log("shown"+this.shown);
					//this.mycanvas.nativeElement.width = this.mycanvas.nativeElement.width -1
					} 
				});
				//console.log(this.doughnutChartData);
				
			}
			//console.log(this.doughnutChartLabels.length);
			this.doughnutChartLabels=this.Labels;
			//this.doughnutChartData=this.Data;

    }, (err) => {
      console.log(err);
    });
	}

	ngOnInit() {
		

		/*this.intService.getAllInterests().subscribe(ints => {
			this.interests = ints;
			console.log(ints);
			this.doughnutChartData=[];
			for(var i =0 ;i< ints.length; i++){
				this.Labels.push(ints[i].label);
				this.intService.usersByInterest(ints[i].label).subscribe(users=>{
					console.log("users.length = ",users.length);
					console.log("le type"+ typeof(users.length));
					this.doughnutChartData.push(<number>JSON.parse(users.length));

				
				console.log("i"+i);
				console.log("shown"+this.shown);
				if(i == ints.length){
					this.shown = true;
					console.log("shown"+this.shown);
					this.mycanvas.nativeElement.width = this.mycanvas.nativeElement.width -1
					} 
					
				});
				console.log(this.doughnutChartData);
				
			}
			console.log(this.doughnutChartLabels.length);
			this.doughnutChartLabels=this.Labels;
			//this.doughnutChartData=this.Data;

		});*/
		
	}


	// events
	public chartClicked(e:any):void {
		console.log(e);
	}

	public chartHovered(e:any):void {
		console.log(e);
	}
}
