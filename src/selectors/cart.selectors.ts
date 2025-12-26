import { Page, Locator } from "@playwright/test";

export class CartSelectors {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  viewCartLink(): Locator {
    return this.page.getByRole("link", { name: "View Cart" });
  }

  cartProductRow(index: number): Locator {
    return this.page.locator("#cart_info tbody tr").nth(index);
  }

  cartProductName(index: number): Locator {
    return this.cartProductRow(index).locator("h4 a");
  }

  cartProductPrice(index: number): Locator {
    return this.cartProductRow(index).locator(".cart_price p");
  }

  cartProductQuantity(index: number): Locator {
    return this.cartProductRow(index).locator(".cart_quantity button");
  }

  cartProductTotal(index: number): Locator {
    return this.cartProductRow(index).locator(".cart_total_price");
  }

  deleteButton(index: number): Locator {
    return this.cartProductRow(index).locator(".cart_delete");
  }

  proceedToCheckoutButton(): Locator {
    return this.page.getByText("Proceed To Checkout");
  }

  cartItemsCount(): Locator {
    return this.page.locator("#cart_info tbody tr");
  }
}
