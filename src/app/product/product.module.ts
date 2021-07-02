import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';

import { SharedModule } from '@shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { productReducer } from './store/product.reducer';


import { ProductComponent } from './components';
import { ProductContainer } from './containers';
import { ProductService } from './services';
import { ProductEffects } from './store/product.effects';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProductComponent,
    ProductContainer
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    SharedModule,
    StoreModule.forFeature('products', productReducer),
    EffectsModule.forFeature([ProductEffects]),
    FormsModule
  ],
  providers: [ProductService]
})
export class ProductModule { }
