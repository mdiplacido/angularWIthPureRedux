import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromBook from '../book/book.reducer';

export interface State {

  books: fromBook.State;
}

export const reducers: ActionReducerMap<State> = {

  books: fromBook.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
