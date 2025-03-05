import { test, expect } from '@playwright/test';

test('should use TEST_API_URL from .env.test', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Frontbuild/);
    await page.getByTestId('add-task-button').click();
})

// test('should use ENABLE_MOCKS from .env.test', async ({ page }) => {
//     console.log(`Enable Mocks: ${process.env.NEXT_PUBLIC_ENABLE_MSW}`);
//     expect(process.env.NEXT_PUBLIC_ENABLE_MSW).toBe('true');
// });4