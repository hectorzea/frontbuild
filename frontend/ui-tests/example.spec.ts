import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Frontbuild/);
});

test('get started link', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('button', { name: 'Add Task' })).toBeVisible();
});
