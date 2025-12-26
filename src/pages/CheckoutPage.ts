import { Page, expect } from "@playwright/test";
import { CheckoutSelectors } from "../selectors/checkout.selectors";
import { PaymentDetails } from "../models/PaymentDetails";

export class CheckoutPage {
  readonly page: Page;
  readonly selectors: CheckoutSelectors;

  constructor(page: Page) {
    this.page = page;
    this.selectors = new CheckoutSelectors(page);
  }

  async placeOrder() {
    await this.selectors.placeOrderButton().click();
  }

  async fillPaymentDetails(payment: PaymentDetails) {
    await this.selectors.nameOnCardInput().fill(payment.nameOnCard);
    await this.selectors.cardNumberInput().fill(payment.cardNumber);
    await this.selectors.cvcInput().fill(payment.cvc);
    await this.selectors.expiryMonthInput().fill(payment.expiryMonth);
    await this.selectors.expiryYearInput().fill(payment.expiryYear);
  }

  async confirmPayment() {
    await this.selectors.payButton().click();
  }

  async verifyOrderSuccess() {
    await expect(this.selectors.successMessage()).toBeVisible();
  }

  async completeCheckout(payment: PaymentDetails) {
    await this.placeOrder();
    await this.fillPaymentDetails(payment);
    await this.confirmPayment();
  }

  async clickContinue() {
    await this.selectors.continueButton().click();
  }
}
