import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SplashScreenModule } from '../splash-screen/splash-screen.module';
import { ProductCardModule } from '../product/product-card.module';
import { FormsModule } from '@angular/forms';
import { FavoriteCardModule } from '../favorite/card/favorite-card.module';
import { OrderCardModule } from '../order/card/order-card.module';
import { LoginModule } from '../login/login.module';
import { RegistrationModule } from '../registration/registration.module';
import { NavModule } from '../nav/nav.module';
import { DetailsModule } from '../details/details.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ProductAddModule } from '../product/add/product-add/product-add.module';



@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule, FormsModule, SplashScreenModule, ProductCardModule, FavoriteCardModule,
    OrderCardModule, LoginModule, RegistrationModule, NavModule, DetailsModule, MatIconModule, MatButtonModule,
    ProductAddModule,
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
