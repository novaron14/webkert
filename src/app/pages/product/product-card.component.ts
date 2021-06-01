import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/shared/models/product.model';


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() product : Product = {} as any;
  @Input() hasAction = true;
  @Output() callFav = new EventEmitter<Product>();
  @Output() callOrder = new EventEmitter<Product>();
  @Output() getProduct = new EventEmitter<Product>();

  constructor() { }

  ngOnInit(): void {
  }

  toggleStar(event: any): void{
event.stopPropagation();
this.product.star = !this.product.star;
this.callFav.emit(this.product);

  }
  toggleOrder(event: any): void{
    event.stopPropagation();
    this.product.ordered = !this.product.ordered;
    this.callOrder.emit(this.product);

      }

}
