import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './feature/main/main.component';
import { CatalogeComponent } from './feature/cataloge/cataloge.component';
import { ProductComponent } from './feature/product/product.component';
import { OrderComponent } from './feature/order/order.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'catalog', component: CatalogeComponent },
  { path: 'product/:id', component: ProductComponent },
  { path: 'order', component: OrderComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
