import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderCardComponent } from './order-card.component';
import { ProductCardModule } from '../../product/product-card.module';



@NgModule({
  declarations: [OrderCardComponent],
  imports: [
    CommonModule,
    ProductCardModule
  ],
  exports:  [OrderCardComponent]
})
export class OrderCardModule { }
