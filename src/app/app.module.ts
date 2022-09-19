import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CartComponent } from './cart/cart.component';
import { ProductsComponent } from './products/products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { NavigateComponent } from './admin/navigate/navigate.component';
import { ManipulationComponent } from './admin/manipulation/manipulation.component';
import { CurrencyPipe } from '@angular/common';
import { ImageCropperModule } from 'ngx-image-cropper';
import { AngularFireModule } from '@angular/fire/compat';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component'
import { UserAuthService } from './services/userAuthServices/user.auth.service';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CartComponent,
    ProductsComponent,
    AdminComponent,
    NavigateComponent,
    ManipulationComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    ImageCropperModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyDSpj31suG0oI5ithSJuxSSgIsauJWP4YY",
      authDomain: "ecommerce-angular-d22e6.firebaseapp.com",
      projectId: "ecommerce-angular-d22e6",
      storageBucket: "ecommerce-angular-d22e6.appspot.com",
      messagingSenderId: "554003724541",
      appId: "1:554003724541:web:c7f727f6fcfec01e41a694",
      measurementId: "G-2PSJXD84H7"
    }),
    FormsModule
  ],
  providers: [CurrencyPipe, UserAuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
