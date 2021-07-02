import { createAction, props } from '@ngrx/store';
import { Product } from '@shared/models';

export const setItems = createAction('[Product Component] set Items', props<{ products: Product[] }>());

export const unsetItems = createAction('[Product Component] unset Items');
