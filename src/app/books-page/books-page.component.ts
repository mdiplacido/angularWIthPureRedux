import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromRootState from '../reducers';
import * as fromBooksState from '../book/book.reducer';

@Component({
  selector: 'app-books-page',
  templateUrl: './books-page.component.html',
  styleUrls: ['./books-page.component.css']
})
export class BooksPageComponent implements OnInit {
  totalBook$: Observable<number>;

  constructor(private store: Store<fromRootState.State>) {
    this.totalBook$ = store.pipe(select(fromBooksState.selectTotal));
  }

  ngOnInit() {
  }

}
