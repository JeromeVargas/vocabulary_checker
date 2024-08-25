import { test, expect } from "@playwright/test";

import { TOPIC, TOPIC_NUMBER_OF_WORDS } from "../src/config/constants";

const LOCAL_HOST_URL_INTERFACE = `http://localhost:4173/${TOPIC}`;

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
    // repeat based on the number of elements on the first topic meta-data words array
    for (let index = 0; index < TOPIC_NUMBER_OF_WORDS; index++) {
      await page.getByRole("button").first().click();
      await page.getByRole("button").last().click();
    }

    await expect(page.getByRole("link")).toBeVisible();

    await page.getByRole("link").click();
    await expect(page.getByRole("heading")).toBeVisible();
  });
});
