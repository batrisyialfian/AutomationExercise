import { Page, Locator } from "@playwright/test";

export class CheckoutSelectors {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  placeOrderButton(): Locator {
    return this.page.getByRole("link", { name: "Place Order" });
  }

  nameOnCardInput(): Locator {
    return this.page.locator('input[name="name_on_card"]');
  }

  cardNumberInput(): Locator {
    return this.page.locator('input[name="card_number"]');
  }

  cvcInput(): Locator {
    return this.page.locator('input[name="cvc"]');
  }

  expiryMonthInput(): Locator {
    return this.page.locator('input[name="expiry_month"]');
  }

  expiryYearInput(): Locator {
    return this.page.locator('input[name="expiry_year"]');
  }

  payButton(): Locator {
    return this.page.getByRole("button", { name: "Pay and Confirm Order" });
  }

  successMessage(): Locator {
    return this.page.getByText(
      "Congratulations! Your order has been confirmed!",
    );
  }

  continueButton(): Locator {
    return this.page.getByRole("link", { name: "Continue" });
  }
}
