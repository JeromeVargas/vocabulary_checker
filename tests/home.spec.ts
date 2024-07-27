import { test, expect } from "@playwright/test";

const LOCAL_HOST_URL = "http://localhost:4173/";

test.describe("home page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(LOCAL_HOST_URL);
  });

  test("should have heading text", async ({ page }) => {
    expect(await page.getByRole("heading").textContent()).toBe(
      "シャドーイング アプリ",
    );
  });
  test("link should redirect to interface", async ({ page }) => {
    await page.getByRole("link", { name: "しょるい" }).click();

    await expect(page.getByRole("button", { name: "Listen" })).toBeVisible();
  });
  test("button should turn dark mode", async ({ page }) => {
    await page.getByRole("button").click();
    await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");

    await page.getByRole("button").click();
    await expect(page.locator("html")).toHaveAttribute("data-theme", "light");
  });
});
