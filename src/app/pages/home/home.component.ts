
import { CATEGORIES } from './../../shared/database/category.database';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductAddComponent } from '../product/add/product-add/product-add.component';
import { Product } from 'src/app/shared/models/product.model';
import { FbBaseService } from 'src/app/services/fb-base.service';
import { Observable } from 'rxjs';
import { DetailsComponent } from '../details/details.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  categories = CATEGORIES;
  products: Observable<Product[]> | any
  // tslint:disable-next-line: whitespace
  category?= '';
  page = 'home';
  favorites: Product[] = [];
  orders: Product[] = [];
  detailData : any;

  constructor(private dialog: MatDialog, private service: FbBaseService) { }

  ngOnInit(): void {
    this.category = 'product';
    this.getProducts();
  }

  ngOnDestroy(): void {
    delete this.category;
  }

  getProducts(): void {
    this.products = this.service.get('products');
  }


  onSelect(event: string){
      this.category = event;
  }

  onFavorite(event: Product): void {
    if (event?.star) {
      this.favorites.push(event);
    }
    this.favorites = this.favorites.filter(item => item.star);
  }
  onOrdered(event: Product): void {
    if (event?.ordered) {
      this.orders.push(event);
    }
    this.orders = this.orders.filter(item => item.ordered);
  }
  goToDetails(event: Product): void {
    this.detailData = event;
    this.page = 'details';
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ProductAddComponent, {});
    // tslint:disable-next-line: deprecation
    dialogRef.afterClosed().subscribe((product: Product) => {
      console.log(product);
      if (product?.name) {
        this.service.add('products', product);
      }
    }, err => {
      console.warn(err);
    });
  }
  addOrder(): void {
    const dialogRef = this.dialog.open(DetailsComponent, {});
    // tslint:disable-next-line: deprecation
    dialogRef.afterClosed().subscribe((product: Product) => {
      console.log(product);
      if (product?.name) {
        this.service.add('orders', product);
      }
    }, err => {
      console.warn(err);
    });
}
}
