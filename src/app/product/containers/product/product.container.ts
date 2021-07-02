import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services';
import { Observable } from 'rxjs';
import { Product } from '@shared/models';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { getAllProducts } from '../../store/product.selectors';
import { MatDialog } from '@angular/material/dialog';
import { ProductDialogComponent } from '../../dialogs/product-dialog/product-dialog.component';

@Component({
  selector: 'app-product-container',
  template: `
    <app-product [products]="products$ | async" [displayedColumns]="displayedColumns" (openDialog)="openDialog($event)"></app-product>
  `,

})
export class ProductContainer implements OnInit {

  products$: Observable<Product[]>;
  displayedColumns: string[];

  constructor(private productService: ProductService, private store: Store<AppState>, private dialog: MatDialog) {
    this.products$ = this.store.select(getAllProducts);
    this.displayedColumns = ['id', 'codigo', 'estado', 'precio', 'producto', 'descripcion', 'idCategoria'];
  }

  ngOnInit(): void {
    // this.productService.getProducts();
  }

  openDialog(product?: Product): void {
    console.log(product);
    const dialogRef = this.dialog.open(ProductDialogComponent, {
      width: '600px',
      data: product
        ? { product: { ...product }, isNew: false }
        : { isNew: true }
    })
  }

}
