import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LineGraphComponent } from './line-graph/line-graph.component';
import { HighchartsComponent } from './highcharts.component';

const routes: Routes = [
  {
    path: '',
    component: HighchartsComponent
  },
  {
    path: 'line-graph',
    component: LineGraphComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HighchartsRoutingModule { }
