import { Injectable } from '@angular/core';
import { ConfigurationServiceService, ServiceHelperService } from '@shared/services';
import { Product } from '@shared/models';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as productActions from '../store/product.actions';
import { Observable } from 'rxjs';

@Injectable()
export class ProductService {

  constructor(private store: Store<AppState>, private serviceHelper: ServiceHelperService<any, any>, private serviceConfig: ConfigurationServiceService) { }

  getAllProducts(): Observable<Product[]> {
    return this.serviceHelper.getData('', `${this.serviceConfig.settings.apiServer}${this.serviceConfig.settings.ServicesURI["Products"]}`)
    // .subscribe((products: Product[]) => {
    //   console.log(products);
    //   this.store.dispatch(productActions.setProducts({ products }))
    // });
  }

  createProduct(product: Product): Observable<Product> {
    return this.serviceHelper.postData(`${this.serviceConfig.settings.apiServer}${this.serviceConfig.settings.ServicesURI["Products"]}`, product);
  }

  deleteProduct(productId: string): Observable<any> {
    return this.serviceHelper.deleteData(`${this.serviceConfig.settings.apiServer}${this.serviceConfig.settings.ServicesURI["Products"]}/` + productId);
  }

  updateProduct(productId: string | number, changes: Partial<Product>): Observable<any> {
    return this.serviceHelper.putData(`${this.serviceConfig.settings.apiServer}${this.serviceConfig.settings.ServicesURI["Products"]}/` + productId, changes);
  }
}
