import {Component,OnInit,ElementRef } from '@angular/core';
import { PostsService } from '../posts.service';
import {ActivatedRoute,Router,Params} from '@angular/router';
import { AmChartsService } from "amcharts3-angular2";
@Component({
  selector: 'app-addbeacon',
  templateUrl: './dashboardbeacon.component.html',
  styleUrls: ['./dashboardbeacon.component.css']
})

export class dashboardBeacon implements OnInit {
   private chart: any;
   pdfSrc: string = '/pdf-test.pdf';
  page: number = 10;
 num:number;
 num1:number;
 num2:number;
  constructor(private postsService: PostsService,private route : ActivatedRoute,private router:Router,private AmCharts: AmChartsService) { }

  ngOnInit(){
 
  
this.postsService.CountBeacons().subscribe(num => {
      this.num = num;
      console.log(this.num)
    });

this.postsService.CountAllBeacons().subscribe(num1 => {
      this.num1 = num1;
      console.log(this.num1)
    });

this.chart = this.AmCharts.makeChart("chartdiv", {
  "type": "pie",
  "startDuration": 0,
   "theme": "light",
  "addClassNames": true,
  "legend":{
     "position":"right",
    "marginRight":100,
    "autoMargins":false
  },
  "innerRadius": "30%",
  "defs": {
    "filter": [{
      "id": "shadow",
      "width": "200%",
      "height": "200%",
      "feOffset": {
        "result": "offOut",
        "in": "SourceAlpha",
        "dx": 0,
        "dy": 0
      },
      "feGaussianBlur": {
        "result": "blurOut",
        "in": "offOut",
        "stdDeviation": 5
      },
      "feBlend": {
        "in": "SourceGraphic",
        "in2": "blurOut",
        "mode": "normal"
      }
    }]
  },
  "dataProvider": [{
    "country": "6 éme arrondissement",
    "nombre": 76
  }, {
    "country": "6 éme arrondissement",
    "nombre": 22
  }, {
    "country": "7 éme arrondissement",
    "nombre": 43
  }, {
    "country": "5 éme arrondissement",
    "nombre": 50
  }],
  "valueField": "nombre",
  "titleField": "country",
  "export": {
    "enabled": true
  }
});

var chart1 = AmCharts.makeChart("chartdiv1", {
    "type": "serial",
  "theme": "light",
    "legend": {
        "horizontalGap": 10,
        "maxColumns": 1,
        "position": "right",
    "useGraphSettings": true,
    "markerSize": 10
    },
    "dataProvider": [{
        "year": 2017,
        "europe": 600,
        "namerica": 500,
        "asia": 400,
        "lamerica": 300,
        "meast": 200,
        "africa": 100
    }],
    "valueAxes": [{
        "stackType": "regular",
        "axisAlpha": 0.3,
        "gridAlpha": 0
    }],
    "graphs": [{
        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
        "fillAlphas": 0.8,
        "labelText": "[[value]]",
        "lineAlpha": 0.3,
        "title": " Active beacons",
        "type": "column",
    "color": "#000000",
        "valueField": "meast"
    }, {
        "balloonText": "<b>[[title]]</b><br><span style='font-size:14px'>[[category]]: <b>[[value]]</b></span>",
        "fillAlphas": 0.8,
        "labelText": "[[value]]",
        "lineAlpha": 0.3,
        "title": "Out of order Beacons",
        "type": "column",
    "color": "#000000",
        "valueField": "africa"
    }],
    "categoryField": "year",
    "categoryAxis": {
        "gridPosition": "start",
        "axisAlpha": 0,
        "gridAlpha": 0,
        "position": "left"
    },
    "export": {
      "enabled": true
     }

});






this.chart.addListener("init",this.handleInit);

this.chart.addListener("rollOverSlice", function(e) {
  this.handleRollOver(e);
});




}
 ngOnDestroy() {
    this.AmCharts.destroyChart(this.chart);
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
public  handleInit(){
  this.chart.legend.addListener("rollOverItem", this.handleRollOver);
}

public handleRollOver(e){
  var wedge = e.dataItem.wedge.node;
  wedge.parentNode.appendChild(wedge);
}
  
}
