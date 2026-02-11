import { test, expect } from "@playwright/test";

test("Fronbuild Quality Tests // Home Page (Snapshot Test)", async ({
  page,
}) => {
  await page.goto("/");
  await expect(
    page.getByText(
      /Building the web and technology with curiosity, innovation, and quality/i,
    ),
  ).toBeVisible();
  await expect(page).toHaveScreenshot({
    maxDiffPixelRatio: 0.3,
  });
});
