import { Injectable } from '@angular/core';
import { Store, createStore, Action } from 'redux';
import { counter, CounterActions } from './counter.reducer';
import { Observable, BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterReducerService {
  counterStore: Store<number, Action<CounterActions>>;

  select(): Observable<number> {
    return Observable.create((observer: Subject<number>) => {
      // setup the producer & capture the unsubscribe handler
      const unSub = this.counterStore.subscribe(() => {
        observer.next(this.counterStore.getState());
      });

      // immediately emit the current state
      observer.next(this.counterStore.getState());

      // when the caller unsubscribes the unsubscribe handler will get triggered
      return () => { console.log('removing sub'); unSub(); };
    });
  }

  constructor() {
    // https://github.com/zalmoxisus/redux-devtools-extension
    this.counterStore = createStore(counter,
      (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION__());
  }
}
