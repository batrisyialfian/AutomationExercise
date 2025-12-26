import { Page, Locator } from "@playwright/test";

export class ProductsSelectors {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  productsLink(): Locator {
    return this.page.getByRole("link", { name: " Products" });
  }

  categoryHeading(categoryName: string): Locator {
    return this.page.getByRole("heading", { name: categoryName });
  }

  categoryLink(category: string) {
    return this.page.locator(`a[href="#${category}"]`);
  }

  subcategoryListItem(subcategoryName: string): Locator {
    return this.page.getByRole("listitem").filter({ hasText: subcategoryName });
  }

  subcategoryLink(subcategoryName: string): Locator {
    return this.page.getByRole("link", { name: subcategoryName });
  }

  categoryHeadingText(text: string): Locator {
    return this.page.getByRole("heading", { name: text });
  }

  addToCartLink(index: number): Locator {
    return this.page.getByRole("link", { name: " Add to cart" }).nth(index);
  }

  addToCartButton() {
    return this.page
      .locator(".product-information")
      .getByRole("button", { name: /add to cart/i });
  }

  viewProductLink(index: number): Locator {
    return this.page.getByRole("link", { name: " View Product" }).nth(index);
  }

  productName(): Locator {
    return this.page.locator(".product-information h2");
  }

  productPrice(): Locator {
    return this.page.locator(".product-information span span");
  }

  productCards(): Locator {
    return this.page.locator(".features_items .col-sm-4");
  }

  productCardName(index: number): Locator {
    return this.page
      .locator(".single-products")
      .nth(index)
      .locator(".productinfo.text-center p");
  }

  productCardPrice(index: number): Locator {
    return this.page
      .locator(".single-products")
      .nth(index)
      .locator(".productinfo.text-center h2");
  }

  breadcrumb(): Locator {
    return this.page.locator(".breadcrumbs");
  }
}
