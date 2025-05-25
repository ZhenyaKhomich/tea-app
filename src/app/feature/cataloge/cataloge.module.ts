import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CatalogeComponent} from './cataloge.component';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
  declarations: [
    CatalogeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ]
})
export class CatalogeModule {}
