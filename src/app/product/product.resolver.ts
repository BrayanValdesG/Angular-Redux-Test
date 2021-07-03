import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { filter, first, tap } from 'rxjs/operators';

import { areProductsLoaded } from './store/product.selectors';
import { loadProducts, productsLoaded } from './store/product.actions';
import { AppState } from '../app.reducer';


@Injectable()
export class ProductResolver implements Resolve<Observable<any>> {

    constructor(private store: Store<AppState>) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
        return this.store
            .pipe(
                select(areProductsLoaded),
                tap((productsLoaded) => {
                    // console.log('111', productsLoaded);
                    if (!productsLoaded) {
                        this.store.dispatch(loadProducts());
                    }

                }),
                filter(productsLoaded => productsLoaded),
                first()
            );
    }
}
