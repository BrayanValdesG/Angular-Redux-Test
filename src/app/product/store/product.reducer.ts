import { createReducer, on, Action } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { setItems, unsetItems } from './product.actions';
import { Product } from '@shared/models';


export interface State {
    productos: Product[];
}

export interface AppStateWithProduct extends AppState {
    product: State
}

export const initialState: State = {
    productos: [],
};

// tslint:disable-next-line: variable-name
const _productReducer = createReducer(initialState,

    on(setItems, (state, { products }) => ({ ...state, products: [...products] })),
    on(unsetItems, (state) => ({ ...state, products: [] })),
);

export function productReducer(state: State | undefined, action: Action): State {
    return _productReducer(state, action);
}
