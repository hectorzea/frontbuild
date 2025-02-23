import { test, expect } from '@playwright/test';

// test('has title', async ({ page }) => {
//   await page.goto('http://localhost:3000/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Frontbuild/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('http://localhost:3000/');

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('button', { name: 'Add Task' })).toBeVisible();
// });

test('add task', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByTestId('add-task-button').click();
  await page.getByRole('textbox', { name: 'Title' }).fill('hola2');

  await page.getByRole('combobox', { name: 'Status' }).click();
  await page.getByRole('option', { name: 'In progress' }).click();

  await page.getByRole('combobox', { name: 'Label' }).click();
  await page.getByRole('option', { name: 'Feature' }).click();

  await page.getByRole('combobox', { name: 'Priority' }).click();
  await page.getByRole('option', { name: 'Low' }).click();

  await page.getByTestId('task-form-submit-button').click();

  await expect(page.getByText('Task has been created.')).toBeVisible();
});

