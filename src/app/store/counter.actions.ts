import { Action } from 'redux';
import { CounterActions } from './counter.reducer';

export const IncrementAction: () => Action<CounterActions> =
    () => ({
        type: CounterActions.INCREMENT
    });

export const DecrementAction: () => Action<CounterActions> =
    () => ({
        type: CounterActions.DECREMENT
    });
