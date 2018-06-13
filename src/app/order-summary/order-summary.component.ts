import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { CounterReducerService } from '../store/counter-reducer.service';
import { CounterActions } from './../store/counter.reducer';

import * as fromCounterActions from '../store/counter.actions';

@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss']
})
export class OrderSummaryComponent implements OnInit {
  hasActionButton = false;
  shouldShowNewAgreement = false;
  isHardwareProduct = false;
  isWarrantyProduct = false;
  isExistingAgreement = false;

  data: {
    quantity: number;
    subtotal: number;
    tax: number;
    total: number;
    currencyCode: string;
    showQuotePriceDisclosure: boolean;
    showSubscriptionMsg: boolean;
  } = {} as any;

  viewMode = 'checkout';

  currentCount$: Observable<number>;

  constructor(private readonly counterService: CounterReducerService) {
    this.currentCount$ = this.counterService.select();
  }

  ngOnInit() {
  }

  openAgreement(): void {
    // no-op
  }

  onSubmit(): void {
    // no-op
  }

  increment(): void {
    this.counterService.counterStore.dispatch(fromCounterActions.IncrementAction());
  }

  decrement(): void {
    this.counterService.counterStore.dispatch(fromCounterActions.DecrementAction());
  }
}
