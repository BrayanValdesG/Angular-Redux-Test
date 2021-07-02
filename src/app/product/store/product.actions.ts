import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Product } from '@shared/models';

export const loadProducts = createAction('[Product List] Load Products via Service');

export const productsLoaded = createAction('[Product Effect] Products Loaded Successfully', props<{ products: Product[] }>());

export const createProduct = createAction('[Product Component] Create Product', props<{ product: Product }>());

export const updateProduct = createAction('[Product Component] Update Product', props<{ update: Update<Product> }>());

export const deleteProduct = createAction('[Product Component] Delete Product', props<{ productId: string }>());

export const productActionTypes = {
    loadProducts,
    productsLoaded,
    createProduct,
    updateProduct,
    deleteProduct
};