import { test, expect } from "@playwright/test";

const LOCAL_HOST_URL = "http://localhost:4173/xxxxxxx";

test.describe("404 page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(LOCAL_HOST_URL);
  });

  test("should have a link to go back to home page", async ({ page }) => {
    await page.getByRole("link").first().click();

    await expect(page.getByRole("heading")).toBeVisible();
  });
});
