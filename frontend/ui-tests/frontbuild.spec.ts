import { test, expect } from '@playwright/test';

test('Home page should match snapshot', async ({ page }) => {
  await page.goto('/');  // Cambia la URL si es necesario
  await expect(page.getByText('Do something with the tests')).toBeVisible();
  const screenshot = await page.screenshot();  // Toma una captura de pantalla
  expect(screenshot).toMatchSnapshot('home-page.png');  // Compara con el snapshot
});

test('App basic flow', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle(/Frontbuild/);

  await page.getByTestId('add-task-button').click();
  await page.getByRole('textbox', { name: 'Title' }).fill('New task created for ui tests');

  await page.getByRole('combobox', { name: 'Status' }).click();
  await page.getByRole('option', { name: 'In progress' }).click();

  await page.getByRole('combobox', { name: 'Label' }).click();
  await page.getByRole('option', { name: 'Feature' }).click();

  await page.getByRole('combobox', { name: 'Priority' }).click();
  await page.getByRole('option', { name: 'Low' }).click();

  await page.getByTestId('task-form-submit-button').click();

  await expect(page.getByText('Task has been created.')).toBeVisible();

  await expect(page.getByText('New task created for ui tests')).toBeVisible();
});

