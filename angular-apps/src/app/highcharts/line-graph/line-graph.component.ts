import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
   selector: 'app-line-graph',
   templateUrl: './line-graph.component.html',
   styleUrls: ['./line-graph.component.scss']
})
export class LineGraphComponent implements OnInit {
   private highcharts;
   private chartOptions;
   private myData;
   private chartsData = [];

   constructor() { }

   ngOnInit() {
      this.getData();
      this.createChart();
   }

   createChart() {
      this.highcharts = Highcharts;
      this.chartOptions = {
         chart: {
            type: "line"
         },
         credits: {
            enabled: false
         },
         title: {
            text: "Monthly Average turnover"
         },
         subtitle: {
            text: "Subtitle"
         },
         xAxis: [{
            type: 'datetime',
            minTickInterval: 28 * 24 * 3600 * 1000,
            tickLength: 0,
            dateTimeLabelFormats: {
               month: '%b'
            }
         }, {
            linkedTo: 0,
            type: 'datetime',
            labels:
            {
               formatter: function () {
                  return Highcharts.dateFormat("%Y", this.value);
               },
               x: 24,
               y: 14
            },
            lineWidth: 0,
            tickLength: 20,
            tickPositioner: function () {
               let  positions = [];
               
               positions.push(Date.UTC(2018, 5, 10));

               const epochDate =  new Date(Date.UTC(2019, 1, 10));
               const yearEpoch = Date.UTC(epochDate.getFullYear(), 0);

               positions.push(yearEpoch);

               return positions;
            },
            dateTimeLabelFormats: {
               year: '%Y',
            }
         }],
         yAxis: {
            title: {
               text: "Amount"
            }
         },
         tooltip: {
            formatter: function () {
               return `
               From: ${this.point.fromDate}<br>
               To: ${this.point.toDate}<br>
               Amount: ${this.y}<br>
               `;
            }
         },
         series: [
            {
               name: 'Tokyo',
               data: this.chartsData,
               showInLegend: false
            }
         ]
      };
   }

   getData() {
      this.myData = [
         {
            amount: 1300,
            fromDate: Date.UTC(2018, 5, 10),
            toDate: Date.UTC(2018, 5, 11)
         }, {
            amount: 1300,
            fromDate: Date.UTC(2018, 6, 10),
            toDate: Date.UTC(2018, 6, 11)
         }, {
            amount: 1300,
            fromDate: Date.UTC(2018, 7, 10),
            toDate: Date.UTC(2018, 7, 11)
         }, {
            amount: 1300,
            fromDate: Date.UTC(2018, 8, 10),
            toDate: Date.UTC(2018, 8, 11)
         }, {
            amount: 1300,
            fromDate: Date.UTC(2018, 9, 10),
            toDate: Date.UTC(2018, 9, 11)
         }, {
            amount: 1300,
            fromDate: Date.UTC(2018, 10, 10),
            toDate: Date.UTC(2018, 10, 11)
         }, {
            amount: 1300,
            fromDate: Date.UTC(2018, 11, 10),
            toDate: Date.UTC(2018, 11, 11)
         }, {
            amount: 1300,
            fromDate: Date.UTC(2018, 12, 10),
            toDate: Date.UTC(2018, 12, 11)
         }, {
            amount: 1300,
            fromDate: Date.UTC(2019, 1, 10),
            toDate: Date.UTC(2019, 1, 11)
         }, {
            amount: 1300,
            fromDate: Date.UTC(2019, 2, 10),
            toDate: Date.UTC(2019, 2, 11)
         }, {
            amount: 1900,
            fromDate: Date.UTC(2019, 3, 10),
            toDate: Date.UTC(2019, 3, 11)
         }, {
            amount: 4300,
            fromDate: Date.UTC(2019, 4, 10),
            toDate: Date.UTC(2019, 4, 11)
         }, {
            amount: 1300,
            fromDate: Date.UTC(2019, 5, 10),
            toDate: Date.UTC(2019, 5, 11)
         },
      ];

      this.myData.forEach(element => {
         this.chartsData.push({
            x: element.fromDate,
            y: element.amount,
            toDate: (new Date(element.toDate)).toISOString().split('T')[0],
            fromDate: (new Date(element.fromDate)).toISOString().split('T')[0]
         });
      });

   }
}
