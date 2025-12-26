import { test, expect } from "@playwright/test";

test("Simple navigation test", async ({ page }) => {
  await page.goto("https://automationexercise.com/", {
    waitUntil: "domcontentloaded",
    timeout: 60000,
  });

  await expect(page.getByRole("link", { name: " Products" })).toBeVisible();
  console.log("✅ Page loaded successfully");
});
