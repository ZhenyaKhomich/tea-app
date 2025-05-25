import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppComponent} from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import {SharedModule} from './shared/shared.module';
import {RouterModule, RouterOutlet} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {CatalogeModule} from './feature/cataloge/cataloge.module';
import { HttpClientModule } from '@angular/common/http';
import {MainModule} from './feature/main/main.module';
import {OrderModule} from './feature/order/order.module';
import {ProductModule} from './feature/product/product.module';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    SharedModule,
    MainModule,
    OrderModule,
    CatalogeModule,
    ProductModule,
    RouterOutlet,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    NgbAccordionModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
