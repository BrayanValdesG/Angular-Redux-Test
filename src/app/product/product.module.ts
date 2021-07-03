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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductDialogComponent } from './dialogs/product-dialog/product-dialog.component';
import { FilterEstadoPipe } from './pipes/filter-estado.pipe';


@NgModule({
  declarations: [
    ProductComponent,
    ProductContainer,
    ProductDialogComponent,
    FilterEstadoPipe
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    SharedModule,
    StoreModule.forFeature('products', productReducer),
    EffectsModule.forFeature([ProductEffects]),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ProductService]
})
export class ProductModule { }
