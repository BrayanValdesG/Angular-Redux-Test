import { createAction, props } from '@ngrx/store';
import { Product } from '@shared/models';

export const setProducts = createAction('[Product Component] set Products', props<{ products: Product[] }>());

export const unsetProducts = createAction('[Product Component] unset Products');
