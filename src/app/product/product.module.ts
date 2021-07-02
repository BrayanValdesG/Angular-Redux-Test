import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';

import { SharedModule } from '@shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { productReducer } from './store/product.reducer';

import { ProductComponent } from './components';
import { ProductContainer } from './containers';


@NgModule({
  declarations: [
    ProductComponent,
    ProductContainer
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    SharedModule,
    StoreModule.forFeature('product', productReducer)
  ]
})
export class ProductModule { }
