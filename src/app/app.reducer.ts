import { environment } from '@environments/environment';
import { ActionReducerMap, MetaReducer } from '@ngrx/store';

import * as ui from '@shared/store/ui.reducer';

export interface AppState {
    ui: ui.State
}

export const appReducers: ActionReducerMap<AppState> = {
    ui: ui.uiReducer
}

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];