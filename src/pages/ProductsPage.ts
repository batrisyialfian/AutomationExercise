import { Page, expect } from "@playwright/test";
import { ProductsSelectors } from "../selectors/products.selectors";
import { Product } from "../models/Product";

export class ProductsPage {
  readonly page: Page;
  readonly selectors: ProductsSelectors;

  constructor(page: Page) {
    this.page = page;
    this.selectors = new ProductsSelectors(page);
  }

  async navigateToProducts() {
    await this.selectors.productsLink().click();
  }

  async filterByCategory(category: string, subcategory: string) {
    // Click category heading to expand
    await this.selectors.categoryLink(category).click();
    // Click subcategory
    await this.selectors.subcategoryLink(subcategory).click();
  }

  async verifyCategoryHeader(expectedText: string) {
    await expect(
      this.selectors.categoryHeadingText(expectedText),
    ).toBeVisible();
  }

  async getFirstProductDetails(): Promise<Product> {
    const name = await this.selectors.productCardName(0).textContent();
    const price = await this.selectors.productCardPrice(0).textContent();

    return {
      name: name?.trim() || "",
      price: price?.trim() || "",
    };
  }

  async verifyFirstProductVisible() {
    await expect(this.selectors.productCards().first()).toBeVisible();
  }

  async addFirstProductToCart() {
    await this.selectors.addToCartLink(0).click();
  }

  async addProductToCartByIndex(index: number) {
    await this.selectors.addToCartLink(index).click();
  }

  async viewProductDetails(index: number) {
    await this.selectors.viewProductLink(index).click();
    await expect(this.selectors.productName()).toBeVisible();
  }

  async getProductDetailsFromPage(): Promise<Product> {
    const name = await this.selectors.productName().textContent();
    const price = await this.selectors.productPrice().textContent();

    return {
      name: name?.trim() || "",
      price: price?.trim() || "",
    };
  }

  async verifyProductDetails(product: Product) {
    await expect(this.selectors.productName()).toContainText(product.name);
    await expect(this.selectors.productPrice()).toContainText(product.price);
  }

  async addProductToCartFromListing(index: number) {
    await this.selectors.addToCartLink(index).click();
  }

  async addProductToCartFromDetails() {
    await this.selectors.addToCartButton().click();
  }

  async goBack() {
    await this.page.goBack();
  }
}
