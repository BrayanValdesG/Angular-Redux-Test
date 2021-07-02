import { Injectable } from '@angular/core';
import { ConfigurationServiceService, ServiceHelperService } from '@shared/services';
import { Product } from '@shared/models';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as productActions from '../store/product.actions';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private store: Store<AppState>, private serviceHelper: ServiceHelperService<Product[], any>, private serviceConfig: ConfigurationServiceService) { }

  getProducts() {
    this.serviceHelper.getData('', `${this.serviceConfig.settings.apiServer}${this.serviceConfig.settings.ServicesURI["Products"]}`)
      .subscribe((products: Product[]) => {
        console.log(products);
        this.store.dispatch(productActions.setProducts({ products }))
      });
  }
}
