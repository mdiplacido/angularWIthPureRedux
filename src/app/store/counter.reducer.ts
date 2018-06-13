import { createStore, Action } from 'redux';
import * as fromCounterActions from './counter.actions';

export enum CounterActions {
    INCREMENT = 'INCREMENT',
    DECREMENT = 'DECREMENT',
}

export function counter(state = 0, action: Action<CounterActions>) {
    switch (action.type) {
        case CounterActions.INCREMENT:
            return state + 1;
        case CounterActions.DECREMENT:
            return state - 1;
        default:
            return state;
    }
}
