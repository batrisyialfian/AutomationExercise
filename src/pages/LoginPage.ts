import { Page, expect } from "@playwright/test";
import { LoginSelectors } from "../selectors/login.selectors";
import { Credentials } from "../models/Credentials";

export class LoginPage {
  readonly page: Page;
  readonly selectors: LoginSelectors;

  constructor(page: Page) {
    this.page = page;
    this.selectors = new LoginSelectors(page);
  }

  async goto() {
    await this.page.goto("/");
  }

  async clickSignupLogin() {
    await this.selectors.signupLoginLink().click();
  }

  async fillLoginForm(credentials: Credentials) {
    await this.selectors.emailInput().fill(credentials.email);
    await this.selectors.passwordInput().fill(credentials.password);
  }

  async clickLoginButton() {
    await this.selectors.loginButton().click();
  }

  async login(credentials: Credentials) {
    await this.clickSignupLogin();
    await this.fillLoginForm(credentials);
    await this.clickLoginButton();
  }

  async verifyLoggedIn() {
    await expect(this.selectors.loggedInAsText()).toBeVisible();
  }
}
