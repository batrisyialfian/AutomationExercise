import { test as base, Page } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { testCredentials } from "../test-data/test-data";

type AuthFixture = {
  authenticatedPage: Page;
};

export const test = base.extend<AuthFixture>({
  authenticatedPage: async ({ page }, use) => {
    // Perform login before each test
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login(testCredentials);
    await loginPage.verifyLoggedIn();

    // Use the authenticated page in tests
    await use(page);
  },
});

export { expect } from "@playwright/test";
