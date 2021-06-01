import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoriteCardComponent } from './favorite-card.component';
import { ProductCardModule } from '../../product/product-card.module';



@NgModule({
  declarations: [FavoriteCardComponent],
  imports: [
    CommonModule, ProductCardModule
  ],
  exports: [FavoriteCardComponent]
})
export class FavoriteCardModule { }
