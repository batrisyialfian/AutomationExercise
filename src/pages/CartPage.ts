import { Page, expect } from "@playwright/test";
import { CartSelectors } from "../selectors/cart.selectors";
import { CartItem } from "../models/CartItem";

export class CartPage {
  readonly page: Page;
  readonly selectors: CartSelectors;

  constructor(page: Page) {
    this.page = page;
    this.selectors = new CartSelectors(page);
  }

  async viewCart() {
    await this.selectors.viewCartLink().click();
    await expect(this.selectors.cartItemsCount().first()).toBeVisible();
  }

  async getCartItem(index: number): Promise<CartItem> {
    const name = await this.selectors.cartProductName(index).textContent();
    const price = await this.selectors.cartProductPrice(index).textContent();
    const quantity = await this.selectors
      .cartProductQuantity(index)
      .textContent();
    const total = await this.selectors.cartProductTotal(index).textContent();

    return {
      name: name?.trim() || "",
      price: price?.trim() || "",
      quantity: parseInt(quantity?.trim() || "0"),
      total: total?.trim() || "",
    };
  }

  async verifyProductInCart(productName: string, expectedPrice: string) {
    // Find the product row by name
    const row = this.page.locator("#cart_info tbody tr").filter({ hasText: productName });

    // Verify name
    await expect(row.locator("h4 a")).toContainText(productName);

    // Verify price
    await expect(row.locator(".cart_price")).toContainText(expectedPrice);
  }

  async getAllCartItemNames(): Promise<string[]> {
    const count = await this.selectors.cartItemsCount().count();
    const names: string[] = [];

    for (let i = 0; i < count; i++) {
      const name = await this.selectors.cartProductName(i).textContent();
      names.push(name?.trim() || "");
    }

    return names;
  }

  async verifyProductExists(productName: string) {
    const names = await this.getAllCartItemNames();
    expect(names).toContain(productName);
  }

  async verifyProductPrice(index: number, expectedPrice: string) {
    await expect(this.selectors.cartProductPrice(index)).toContainText(
      expectedPrice,
    );
  }

  async removeProduct(index: number) {
    const initialCount = await this.selectors.cartItemsCount().count();

    await this.selectors.deleteButton(index).click();

    // Wait for count to decrease
    await expect(this.selectors.cartItemsCount()).toHaveCount(initialCount - 1);
  }

  async verifyProductRemoved(index: number, productName: string) {
    const items = await this.selectors.cartItemsCount().count();

    // If there are remaining items, verify the product name is not present
    if (items > 0) {
      const cartItem = await this.getCartItem(index);
      expect(cartItem.name).not.toContain(productName);
    }
  }

  async proceedToCheckout() {
    await this.selectors.proceedToCheckoutButton().click();
    await this.page.waitForLoadState("networkidle");
  }
}
