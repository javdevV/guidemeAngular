import { Component, OnInit } from '@angular/core';
import { Chart } from 'ng2-chartjs2';
//import { Chartist } from 'chartist';
import  "chartist/dist/scss/chartist.scss";

@Component({
  selector: 'app-chart2',
  templateUrl: './chart2.component.html',
  styleUrls: ['./chart2.component.css']
})
export class Chart2Component implements OnInit {
 /*defaultOptions = {
  // Specify a fixed width for the chart as a string (i.e. '100px' or '50%')
  width: undefined,
  // Specify a fixed height for the chart as a string (i.e. '100px' or '50%')
  height: undefined,
  // Padding of the chart drawing area to the container element and labels as a number or padding object {top: 5, right: 5, bottom: 5, left: 5}
  chartPadding: 5,
  // Override the class names that are used to generate the SVG structure of the chart
  classNames: {
    chartPie: 'ct-chart-pie',
    chartDonut: 'ct-chart-donut',
    series: 'ct-series',
    slicePie: 'ct-slice-pie',
    sliceDonut: 'ct-slice-donut',
    sliceDonutSolid: 'ct-slice-donut-solid',
    label: 'ct-label'
  },
  // The start angle of the pie chart in degrees where 0 points north. A higher value offsets the start angle clockwise.
  startAngle: 0,
  // An optional total you can specify. By specifying a total value, the sum of the values in the series must be this total in order to draw a full pie. You can use this parameter to draw only parts of a pie or gauge charts.
  total: undefined,
  // If specified the donut CSS classes will be used and strokes will be drawn instead of pie slices.
  donut: false,
  // If specified the donut segments will be drawn as shapes instead of strokes.
  donutSolid: false,
  // Specify the donut stroke width, currently done in javascript for convenience. May move to CSS styles in the future.
  // This option can be set as number or string to specify a relative width (i.e. 100 or '30%').
  donutWidth: 60,
  // If a label should be shown or not
  showLabel: true,
  // Label position offset from the standard position which is half distance of the radius. This value can be either positive or negative. Positive values will position the label away from the center.
  labelOffset: 0,
  // This option can be set to 'inside', 'outside' or 'center'. Positioned with 'inside' the labels will be placed on half the distance of the radius to the border of the Pie by respecting the 'labelOffset'. The 'outside' option will place the labels at the border of the pie and 'center' will place the labels in the absolute center point of the chart. The 'center' option only makes sense in conjunction with the 'labelOffset' option.
  labelPosition: 'inside',
  // An interpolation function for the label value
  labelInterpolationFnc: Chartist.noop,
  // Label direction can be 'neutral', 'explode' or 'implode'. The labels anchor will be positioned based on those settings as well as the fact if the labels are on the right or left side of the center of the chart. Usually explode is useful when labels are positioned far away from the center.
  labelDirection: 'neutral',
  // If true the whole data is reversed including labels, the series order as well as the whole series data arrays.
  reverseData: false,
  // If true empty values will be ignored to avoid drawing unncessary slices and labels
  ignoreEmptyValues: false
};*/

 /*data = {
  // A labels array that can contain any sort of values
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
  // Our series array that contains series objects or in this case series data arrays
  series: [
    [5, 2, 4, 2, 0]
  ]
};

// As options we currently only set a static size of 300x200 px. We can also omit this and use aspect ratio containers
// as you saw in the previous example
 options = {
  width: 300,
  height: 200
};*/
 /*data = {
  series: [5, 3, 4]
};

 sum = function(a, b) { return a + b };*/






/*
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
  ];*/


  /*
  type = 'line';
  data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "My First dataset",
      data: [65, 59, 80, 81, 56, 55, 40]
    }
  ]
};
options = {
  responsive: true,
  maintainAspectRatio: false
};*/


  constructor() { }

  ngOnInit() {

   /* new Chartist.Pie('.ct-chart', {
  series: [20, 10, 30, 40]
}, {
  donut: true,
  donutWidth: 20,
  startAngle: 270,
  total: 200
});

new Chartist.Pie('.ct-chart', data, {
  labelInterpolationFnc: function(value) {
    return Math.round(value / data.series.reduce(sum) * 100) + '%';
  }
});*/

}
}
