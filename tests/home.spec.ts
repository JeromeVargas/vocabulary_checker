import { test, expect } from "@playwright/test";

const LOCAL_HOST_URL = "http://localhost:4173/";

test.describe("home page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(LOCAL_HOST_URL);
  });

  test("should have heading", async ({ page }) => {
    await expect(page.getByRole("heading")).toBeVisible();
  });
  test("button should turn dark mode", async ({ page }) => {
    await page.getByRole("button").click();
    await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");

    await page.getByRole("button").click();
    await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
  });
  test("link should redirect to interface", async ({ page }) => {
    await page.getByRole("link").first().click();

    await expect(page.getByRole("button").last()).toBeDisabled();
  });
});
