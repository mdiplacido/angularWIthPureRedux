import * as fromRootState from '../reducers';
import { Book } from './book.model';
import { BookActions, BookActionTypes } from './book.actions';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

export interface State extends EntityState<Book> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Book> = createEntityAdapter<Book>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

export function reducer(
  state = initialState,
  action: BookActions
): State {
  switch (action.type) {
    case BookActionTypes.AddBook: {
      return adapter.addOne(action.payload.book, state);
    }

    case BookActionTypes.UpsertBook: {
      return adapter.upsertOne(action.payload.book, state);
    }

    case BookActionTypes.AddBooks: {
      return adapter.addMany(action.payload.books, state);
    }

    case BookActionTypes.UpsertBooks: {
      return adapter.upsertMany(action.payload.books, state);
    }

    case BookActionTypes.UpdateBook: {
      return adapter.updateOne(action.payload.book, state);
    }

    case BookActionTypes.UpdateBooks: {
      return adapter.updateMany(action.payload.books, state);
    }

    case BookActionTypes.DeleteBook: {
      return adapter.removeOne(action.payload.id, state);
    }

    case BookActionTypes.DeleteBooks: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case BookActionTypes.LoadBooks: {
      return adapter.addAll(action.payload.books, state);
    }

    case BookActionTypes.ClearBooks: {
      return adapter.removeAll(state);
    }

    default: {
      return state;
    }
  }
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors<fromRootState.State>(state => state.books);
