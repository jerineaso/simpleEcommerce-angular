import { HtmlParser } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path:'products', component: ProductsComponent},
  { path:'products/:search', component: ProductsComponent},
  { path:'cart', component: CartComponent},
  { path:'admin', component: AdminComponent},
  { path: 'userSignUp', component: RegisterComponent},
  { path: 'userSignIn', component: LoginComponent},
  { path:'', component: ProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
