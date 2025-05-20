import { Routes } from '@angular/router';
import {MainComponent} from './components/pages/main/main.component';
import {CatalogeComponent} from './components/pages/cataloge/cataloge.component';
import {ProductComponent} from './components/pages/product/product.component';
import {OrderComponent} from './components/pages/order/order.component';

export const routes: Routes = [
  {
    path: '', component: MainComponent
  },
  {
    path: 'catalog', component: CatalogeComponent
  },
  {
    path: 'product/:id', component: ProductComponent
  },
  {
    path: 'order', component: OrderComponent
  },
  {
    path: '**', redirectTo: ''
  }
];
