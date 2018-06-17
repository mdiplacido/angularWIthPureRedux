import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { Book } from './book.model';

export enum BookActionTypes {
  LoadBooks = '[Book] Load Books',
  AddBook = '[Book] Add Book',
  UpsertBook = '[Book] Upsert Book',
  AddBooks = '[Book] Add Books',
  UpsertBooks = '[Book] Upsert Books',
  UpdateBook = '[Book] Update Book',
  UpdateBooks = '[Book] Update Books',
  DeleteBook = '[Book] Delete Book',
  DeleteBooks = '[Book] Delete Books',
  ClearBooks = '[Book] Clear Books'
}

export class LoadBooks implements Action {
  readonly type = BookActionTypes.LoadBooks;

  constructor(public payload: { books: Book[] }) {}
}

export class AddBook implements Action {
  readonly type = BookActionTypes.AddBook;

  constructor(public payload: { book: Book }) {}
}

export class UpsertBook implements Action {
  readonly type = BookActionTypes.UpsertBook;

  constructor(public payload: { book: Book }) {}
}

export class AddBooks implements Action {
  readonly type = BookActionTypes.AddBooks;

  constructor(public payload: { books: Book[] }) {}
}

export class UpsertBooks implements Action {
  readonly type = BookActionTypes.UpsertBooks;

  constructor(public payload: { books: Book[] }) {}
}

export class UpdateBook implements Action {
  readonly type = BookActionTypes.UpdateBook;

  constructor(public payload: { book: Update<Book> }) {}
}

export class UpdateBooks implements Action {
  readonly type = BookActionTypes.UpdateBooks;

  constructor(public payload: { books: Update<Book>[] }) {}
}

export class DeleteBook implements Action {
  readonly type = BookActionTypes.DeleteBook;

  constructor(public payload: { id: string }) {}
}

export class DeleteBooks implements Action {
  readonly type = BookActionTypes.DeleteBooks;

  constructor(public payload: { ids: string[] }) {}
}

export class ClearBooks implements Action {
  readonly type = BookActionTypes.ClearBooks;
}

export type BookActions =
 LoadBooks
 | AddBook
 | UpsertBook
 | AddBooks
 | UpsertBooks
 | UpdateBook
 | UpdateBooks
 | DeleteBook
 | DeleteBooks
 | ClearBooks;
