import { Book } from './../book/book.model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromRootState from '../reducers';
import * as fromBooksState from '../book/book.reducer';
import { AddBook } from '../book/book.actions';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-books-page',
  templateUrl: './books-page.component.html',
  styleUrls: ['./books-page.component.css']
})
export class BooksPageComponent implements OnInit {
  totalBook$: Observable<number>;
  book$: Observable<Book[]>;
  model: Book = { id: undefined, name: '', author: '' };

  @ViewChild('bookForm')
  bookForm: NgForm;

  constructor(private store: Store<fromRootState.State>) {
    this.totalBook$ = store.pipe(select(fromBooksState.selectTotal));
    this.book$ = store.pipe(select(fromBooksState.selectAll));
  }

  ngOnInit() {
  }

  newBook() {
    this.model = { id: undefined, name: '', author: '' };
  }

  onSubmit() {
    this.model.id = Math.ceil(Math.random() * 100000000).toString();
    this.store.dispatch(new AddBook({ book: { ...this.model } }));
    this.newBook();
    this.bookForm.reset();
  }
}
