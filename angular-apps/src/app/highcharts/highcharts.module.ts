import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighchartsComponent } from './highcharts.component';
import { HighchartsRoutingModule } from './highcharts-routing.module';
import { LineGraphComponent } from './line-graph/line-graph.component';
import { HighchartsChartComponent } from 'highcharts-angular';


@NgModule({
  declarations: [
    HighchartsComponent,
    LineGraphComponent,
    HighchartsChartComponent
  ],
  imports: [
    CommonModule,
    HighchartsRoutingModule
  ]
})
export class HighchartsModule { }
