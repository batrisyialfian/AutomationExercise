import { Page, Locator } from "@playwright/test";

export class LoginSelectors {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  signupLoginLink(): Locator {
    return this.page.getByRole("link", { name: " Signup / Login" });
  }

  emailInput(): Locator {
    return this.page
      .locator("form")
      .filter({ hasText: "Login" })
      .getByPlaceholder("Email Address");
  }

  passwordInput(): Locator {
    return this.page.getByRole("textbox", { name: "Password" });
  }

  loginButton(): Locator {
    return this.page.getByRole("button", { name: "Login" });
  }

  loggedInAsText(): Locator {
    return this.page.getByText("Logged in as");
  }
}
