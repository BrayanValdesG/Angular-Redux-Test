import { createReducer, on, Action } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { setProducts, unsetProducts } from './product.actions';
import { Product } from '@shared/models';


export interface State {
    products: Product[];
}

export interface AppStateWithProduct extends AppState {
    product: State
}

export const initialState: State = {
    products: [],
};

// tslint:disable-next-line: variable-name
const _productReducer = createReducer(initialState,

    on(setProducts, (state, { products }) => ({ ...state, products: [...products] })),
    on(unsetProducts, (state) => ({ ...state, products: [] })),
);

export function productReducer(state: State | undefined, action: Action): State {
    return _productReducer(state, action);
}
