import { HtmlParser } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  { path:'products', component: ProductsComponent},
  { path:'cart/:itemCat/:itemid', component: CartComponent},
  { path:'', component: ProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
