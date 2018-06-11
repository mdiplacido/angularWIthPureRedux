import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

  openAgreement(): void {
    // no-op
  }

  onSubmit(): void {
    // no-op
  }
}
