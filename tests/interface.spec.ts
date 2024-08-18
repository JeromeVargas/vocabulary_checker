import { test, expect } from "@playwright/test";

const topic = "articles";

const LOCAL_HOST_URL_INTERFACE = `http://localhost:4173/${topic}`;

test.describe("interface", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(LOCAL_HOST_URL_INTERFACE);
  });

  test("button should be disabled", async ({ page }) => {
    await expect(page.getByRole("button").last()).toBeDisabled();
  });
  test("button should change color", async ({ page }) => {
    await expect(page.getByRole("button").last()).toHaveCSS(
      "background-color",
      "rgb(96, 165, 250)",
    );

    await page.getByRole("button").first().click();

    await expect(page.getByRole("button").last()).toHaveCSS(
      "background-color",
      "rgb(134, 239, 172)",
    );
  });
  test("exit screen should show link to home", async ({ page }) => {
    // repeat based on the number of elements on the topic meta-data words array
    await page.getByRole("button").first().click();
    await page.getByRole("button").last().click();

    await page.getByRole("button").first().click();
    await page.getByRole("button").last().click();

    await page.getByRole("button").first().click();
    await page.getByRole("button").last().click();

    await page.getByRole("button").first().click();
    await page.getByRole("button").last().click();

    await page.getByRole("button").first().click();
    await page.getByRole("button").last().click();

    await page.getByRole("button").first().click();
    await page.getByRole("button").last().click();

    await page.getByRole("button").first().click();
    await page.getByRole("button").last().click();

    await page.getByRole("button").first().click();
    await page.getByRole("button").last().click();

    await page.getByRole("button").first().click();
    await page.getByRole("button").last().click();

    await page.getByRole("button").first().click();
    await page.getByRole("button").last().click();

    await expect(page.getByRole("link")).toBeVisible();

    await page.getByRole("link").click();
    await expect(page.getByRole("heading")).toBeVisible();
  });
});
