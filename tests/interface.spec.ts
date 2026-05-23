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
      "rgb(226, 232, 240)",
    );

    await page.getByRole("button").first().click();

    await expect(page.getByRole("button").last()).toHaveCSS(
      "background-color",
      "rgb(226, 232, 240)",
    );
  });
});
