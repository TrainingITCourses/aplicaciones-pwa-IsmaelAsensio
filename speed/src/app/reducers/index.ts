import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromLaunch from './launch.reducer';

export interface GlobalState {
  launch: fromLaunch.LaunchState;

}

export const reducers: ActionReducerMap<GlobalState> = {
  launch: fromLaunch.reducer,
};


export const metaReducers: MetaReducer<GlobalState>[] = !environment.production ? [] : [];
