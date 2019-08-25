import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AngularMaterialModule } from './angular-material.module';



@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [
    CommonModule,
    AngularMaterialModule
  ],
  exports: [
    AngularMaterialModule
  ]
})
export class SharedModule { }
