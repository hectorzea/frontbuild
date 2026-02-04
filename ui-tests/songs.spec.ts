import { test, expect } from "@playwright/test";
test("Music Blog", async ({ page }) => {
  await page.goto("/songs");
  await expect(page.getByText(/My Most Favorite Song/i)).toBeVisible();
  await expect(page.getByText(/Crystal Glow/i)).toBeVisible();
});
