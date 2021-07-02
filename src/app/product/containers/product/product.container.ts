import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services';
import { Observable } from 'rxjs';
import { Product } from '@shared/models';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { getAllProducts } from '../../store/product.selectors';

@Component({
  selector: 'app-product-container',
  template: `
    <app-product [products]="products$ | async" [displayedColumns]="displayedColumns"></app-product>
  `,

})
export class ProductContainer implements OnInit {

  products$: Observable<Product[]>;
  displayedColumns: string[];

  constructor(private productService: ProductService, private store: Store<AppState>) {
    this.products$ = this.store.select(getAllProducts);
    this.displayedColumns = ['id', 'codigo', 'estado', 'precio', 'producto', 'descripcion', 'idCategoria'];
  }

  ngOnInit(): void {
    // this.productService.getProducts();
  }

}
