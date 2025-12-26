// import { test, expect } from '@playwright/test';

// test('End-To-End user can filter, remove and checkout product from cart', async ({ page }) => {
//   await page.goto('https://automationexercise.com/');
//   await page.getByRole('link', { name: ' Signup / Login' }).click();
//   await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').click();
//   await page.locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address').fill('tester45@gmail.com');
//   await page.getByRole('textbox', { name: 'Password' }).click();
//   await page.getByRole('textbox', { name: 'Password' }).fill('tester45');
//   await page.getByRole('button', { name: 'Login' }).click();
//   await page.getByRole('link', { name: ' Products' }).click();
//   await page.getByRole('heading', { name: ' Kids' }).click();
//   await page.getByRole('heading', { name: ' Kids' }).click();
//   await page.getByRole('link', { name: ' Kids' }).click();
//   await page.getByRole('listitem').filter({ hasText: 'Tops & Shirts' }).click();
//   await page.getByRole('link', { name: 'Tops & Shirts' }).click();
//   await expect(page.locator('section')).toContainText('Kids - Tops & Shirts Products');
//   await expect(page.getByRole('heading', { name: 'Kids - Tops & Shirts Products' })).toBeVisible();
//   await expect(page.locator('div').filter({ hasText: 'Rs. 499 Sleeves Printed Top' }).nth(4)).toBeVisible();
//   await page.getByRole('link', { name: ' Add to cart' }).nth(4).click();
//   await page.getByRole('link', { name: 'View Cart' }).click();
//   await expect(page.getByRole('row', { name: 'Product Image Frozen Tops For' })).toBeVisible();
//   await expect(page.locator('#product-13')).toContainText('Rs. 278');
//   await page.goto('https://automationexercise.com/category_products/5');
//   await expect(page.locator('ol')).toContainText('Products Kids > Tops & Shirts');
//   await page.getByRole('link', { name: ' View Product' }).nth(3).click();
//   await expect(page.locator('section')).toContainText('Full Sleeves Top Cherry - Pink');
//   await expect(page.locator('section')).toContainText('Rs. 679');
//   await page.getByRole('button', { name: ' Add to cart' }).click();
//   await page.getByRole('link', { name: 'View Cart' }).click();
//   await page.locator('.cart_delete').first().click();
//   // await expect(page.locator('#cart_items')).toMatchAriaSnapshot(`
//   //   - list:
//   //     - listitem:
//   //       - link "Home":
//   //         - /url: /
//   //     - listitem: Shopping Cart
//   //   - text: Proceed To Checkout
//   //   - table:
//   //     - rowgroup:
//   //       - row "Item Description Price Quantity Total":
//   //         - cell "Item"
//   //         - cell "Description"
//   //         - cell "Price"
//   //         - cell "Quantity"
//   //         - cell "Total"
//   //         - cell
//   //     - rowgroup:
//   //       - row /Product Image Full Sleeves Top Cherry - Pink Kids > Tops & Shirts Rs\\. \\d+ 1 Rs\\. \\d+ /:
//   //         - cell "Product Image":
//   //           - link "Product Image":
//   //             - /url: ""
//   //             - img "Product Image"
//   //         - cell "Full Sleeves Top Cherry - Pink Kids > Tops & Shirts":
//   //           - heading "Full Sleeves Top Cherry - Pink" [level=4]:
//   //             - link "Full Sleeves Top Cherry - Pink":
//   //               - /url: /product_details/14
//   //           - paragraph: Kids > Tops & Shirts
//   //         - cell /Rs\\. \\d+/:
//   //           - paragraph: /Rs\\. \\d+/
//   //         - cell "1":
//   //           - button "1"
//   //         - cell /Rs\\. \\d+/:
//   //           - paragraph: /Rs\\. \\d+/
//   //         - cell ""
//   //   `);
//   await page.getByText('Proceed To Checkout').click();
//   await page.getByRole('link', { name: 'Place Order' }).click();
//   await page.locator('input[name="name_on_card"]').click();
//   await page.locator('input[name="name_on_card"]').fill('User Test');
//   await page.locator('input[name="card_number"]').click();
//   await page.locator('input[name="card_number"]').fill('349055118266');
//   await page.getByRole('textbox', { name: 'ex.' }).click();
//   await page.getByRole('textbox', { name: 'ex.' }).fill('610');
//   await page.getByRole('textbox', { name: 'MM' }).click();
//   await page.getByRole('textbox', { name: 'MM' }).fill('11');
//   await page.getByRole('textbox', { name: 'YYYY' }).click();
//   await page.getByRole('textbox', { name: 'YYYY' }).fill('2029');
//   await page.getByRole('button', { name: 'Pay and Confirm Order' }).click();
//   await page.getByRole('link', { name: 'Continue' }).click();
// });

import { test, expect } from "../src/fixtures/sessions";
import { ProductsPage } from "../src/pages/ProductsPage";
import { CartPage } from "../src/pages/CartPage";
import { CheckoutPage } from "../src/pages/CheckoutPage";
import { testPayment } from "../src/test-data/test-data";
import { Product } from "../src/models/Product";

test("User can filter products, manage cart, and complete checkout", async ({
  authenticatedPage: page,
}) => {
  const productsPage = new ProductsPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);

  let firstProduct: Product;
  let secondProduct: Product;

  // Go to product page and filter by category
  await test.step("Navigate to products and filter by Kids > Tops & Shirts", async () => {
    await productsPage.navigateToProducts();
    await productsPage.filterByCategory("Kids", "Tops & Shirts");
  });

  // Verify filtered results
  await test.step("Verify filtered results are displayed correctly", async () => {
    await productsPage.verifyCategoryHeader("Kids - Tops & Shirts Products");
    await productsPage.verifyFirstProductVisible();

    // Get first product details for later verification
    firstProduct = await productsPage.getFirstProductDetails();
  });

  // Add item to cart and verify
  await test.step("Add first item to cart and verify", async () => {
    await productsPage.addProductToCartFromListing(0);
    await cartPage.viewCart();
    await cartPage.verifyProductInCart(firstProduct.name, firstProduct.price);
  });

  // Go back and verify filtered results
  await test.step("Navigate back and verify filtered results still valid", async () => {
    await productsPage.goBack();
    await productsPage.verifyCategoryHeader("Kids - Tops & Shirts Products");
    await productsPage.verifyFirstProductVisible();
  });

  // View another item and add to cart
  await test.step("View second product details and add to cart", async () => {
    await productsPage.viewProductDetails(1);
    secondProduct = await productsPage.getProductDetailsFromPage();
    await productsPage.verifyProductDetails(secondProduct);
    await productsPage.addProductToCartFromDetails();
    await cartPage.viewCart();
  });

  // Remove first item from cart
  await test.step("Remove first added item from cart and verify", async () => {
    await cartPage.removeProduct(0);
    await cartPage.verifyProductInCart(secondProduct.name, secondProduct.price);
    // Verify the first product is gone
    const names = await cartPage.getAllCartItemNames();
    expect(names).not.toContain(firstProduct.name);
  });

  // Step 8 & 9: Complete checkout
  await test.step("Proceed to checkout and complete payment", async () => {
    await cartPage.proceedToCheckout();
    await checkoutPage.completeCheckout(testPayment);
    await checkoutPage.verifyOrderSuccess();
    await checkoutPage.clickContinue();
  });
});
