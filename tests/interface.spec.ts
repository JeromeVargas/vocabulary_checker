import { test, expect } from "@playwright/test";

const LOCAL_HOST_URL_INTERFACE = "http://localhost:4173/base-instructions";

test.describe("interface", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(LOCAL_HOST_URL_INTERFACE);
  });

  test("button should have text", async ({ page }) => {
    await expect(page.getByRole("button", { name: "Listen" })).toBeVisible();
  });
  test("button should change the text", async ({ page }) => {
    await page.getByRole("button").first().click();

    await expect(page.getByRole("button", { name: "Next" })).toBeVisible();
  });
  test("exit screen should show new exercise link", async ({ page }) => {
    await page.getByRole("button").first().click();
    await page.getByRole("button", { name: "Next" }).click();

    await page.getByRole("button").first().click();
    await page.getByRole("button", { name: "Next" }).click();

    await page.getByRole("button").first().click();
    await page.getByRole("button", { name: "Next" }).click();

    await page.getByRole("button").first().click();
    await page.getByRole("button", { name: "Next" }).click();

    await expect(
      page.getByRole("link", { name: "New Exercise" }),
    ).toBeVisible();
    await page.getByRole("link", { name: "New Exercise" }).click();
    expect(await page.getByRole("heading").textContent()).toBe(
      "シャドーイング アプリ",
    );
  });
});
