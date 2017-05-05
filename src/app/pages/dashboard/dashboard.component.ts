import {Component , OnInit,OnDestroy} from '@angular/core';
import { AmChartsService } from "amcharts3-angular2";
import { InterestsService } from "../interests/interests.service";


@Component({
  selector: 'dashboard',
  styleUrls: ['./dashboard.scss'],
  templateUrl: './dashboard.html'
})
export class Dashboard implements OnInit,OnDestroy {

private chart: any;
shown:boolean = false;
public interests:any ;
i: number;
j:number;
sourour : any;
a:this;
ss=[];

constructor(private AmCharts: AmChartsService,private intService: InterestsService) {}


makeDataProvider() {
	var dataProvider = [];
	let ss= [];
this.intService.getAllInterests1().then((ints) => {
	this.interests = ints;
	console.log("ints  "+ (ints));
	console.log(this.interests);
	for (this.i=0; this.i< this.interests.length; this.i++) {
		dataProvider.push({
			label:  this.interests[this.i].label,
			value:0
		});
	}
	if(this.i == this.interests.length){
		let promises = [];
		

		for ( this.j=0; this.j< this.interests.length; this.j++) {
			//console.log("entred");
			promises.push(this.intService.usersByInterest1(this.interests[this.j].label));
		} 

		Promise.all(promises).then((users)=>{
			//console.log("label  " +this.interests[this.j].label);
			this.sourour  = users;
			console.log("All done", this.sourour);
			console.log("sourour.length = ",this.sourour.length);
			//dataProvider[this.j].value=this.sourour.length;
			for (var k=0; k<this.sourour.length; k++){

				dataProvider[k].value=<number>this.sourour[k];
				if(dataProvider[k].value > 0){
					ss.push(dataProvider[k]);
					//console.log(ss);
					}

				/*if(k==this.sourour.length-1){
					this.shown = true;
					console.log("shown"+this.shown);
				}*/
			}
			console.log(ss);
			//filled
			this.ss=ss;
			this.start();
			//return ss;


		});
	}
	//return ss;
});

}

start(){
console.log("enter start");
this.chart = this.AmCharts.makeChart("chartdiv",{
	"type"    : "pie",
	"titleField"  : "label",
	"valueField"  : "value",
	"dataProvider"  :this.ss,
	/*"dataProvider"  : [{label: "Quotes", value: 500},
	{label: "Quotesdd", value: 200},
	{label: "Quotesee", value: 300}
	],*/
	"innerRadius": 20,
	"outlineAlpha": 0.4,
	"depth3D": 15,
	"balloonText": "[[title]]<br><span style='font-size:14px'><b>[[value]]</b> ([[percents]]%)</span>",
	"angle": 30,
	"export": {
		"enabled": true
	}
});


}
ngOnInit() {
this.makeDataProvider();

/*if(this.shown==true){
console.log("test");
this.start();
}*/
//this.shown=true;
// This must be called when making any changes to the chart
/*this.AmCharts.updateChart(this.chart, () => {
	this.chart.dataProvider = this.makeDataProvider(); 
	console.log("data providerrr "+this.chart.dataProvider);

});*/

}
ngOnDestroy() {

this.AmCharts.destroyChart(this.chart);
}

}
