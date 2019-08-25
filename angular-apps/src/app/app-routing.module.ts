import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';


const routes: Routes = [
  {
    path: 'highcharts',
    loadChildren: () => import('./highcharts/highcharts.module')
      .then(mod => mod.HighchartsModule),
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module')
      .then(mod => mod.HomeModule),
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
