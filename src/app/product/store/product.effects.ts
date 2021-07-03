import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { concatMap, map } from 'rxjs/operators';
import { productActionTypes } from './product.actions';
import { ProductService } from '../services/product.service';

@Injectable()
export class ProductEffects {

    constructor(private productService: ProductService, private actions$: Actions, private router: Router) {

    }

    loadProducts$ = createEffect(() =>
        this.actions$.pipe(
            ofType(productActionTypes.loadProducts),
            concatMap(() => this.productService.getAllProducts()),
            map(products => productActionTypes.productsLoaded({ products }))
        )
    );

    createProduct$ = createEffect(() =>
        this.actions$.pipe(
            ofType(productActionTypes.createProduct),
            concatMap((action) => this.productService.createProduct(action.product)),
            // tap(() => this.router.navigateByUrl('/products'))
        ), { dispatch: false }
    );

    updateProduct$ = createEffect(() =>
        this.actions$.pipe(
            ofType(productActionTypes.updateProduct),
            concatMap((action) => this.productService.updateProduct(action.update.id, action.update.changes))
        ), { dispatch: false }
    );

    deleteProduct$ = createEffect(() =>
        this.actions$.pipe(
            ofType(productActionTypes.deleteProduct),
            concatMap((action) => this.productService.deleteProduct(action.productId))
        ), { dispatch: false }
    )
}
