import { test, expect } from "@playwright/test";

const LOCAL_HOST_URL = "http://localhost:4173/xxxxxxx";

test.describe("404 page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(LOCAL_HOST_URL);
  });

  test("should have a link to go back to home page", async ({ page }) => {
    await page
      .getByRole("link", { name: "Please go back to the home page" })
      .click();

    expect(await page.getByRole("heading").textContent()).toBe(
      "シャドーイング アプリ",
    );
  });
});
