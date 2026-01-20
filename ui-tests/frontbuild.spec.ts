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

test("Fronbuild Flow // Music Blog ", async ({ page }) => {
  await page.goto("/songs");
  await expect(page.getByText(/My Most Favorite Song/i)).toBeVisible();
});

test("Fronbuild Flow // Tasks", async ({ page }) => {
  await page.goto("/projects/tasks");

  await expect(page.getByText(/Easy Task Creator/i)).toBeVisible();
  await expect(
    page.getByText(/Task creator using tanstack react-table/i),
  ).toBeVisible();

  await page.getByTestId("add-task-link-button").click();
  await page.getByRole("textbox", { name: "Title" }).fill("do success");

  await page.getByRole("combobox", { name: "Status" }).click();
  await page.getByRole("option", { name: "In progress" }).click();

  await page.getByRole("combobox", { name: "Label" }).click();
  await page.getByRole("option", { name: "Feature" }).click();

  await page.getByRole("combobox", { name: "Priority" }).click();
  await page.getByRole("option", { name: "Low" }).click();

  await page.getByTestId("task-form-submit-button").click();

  await expect(page.getByText("Task has been created.")).toBeVisible();

  await expect(page.getByText("do success")).toBeVisible();
});

test("Fronbuild Flow // Edit", async ({ page }) => {
  await page.goto("/projects/tasks");

  await expect(page.getByText(/Easy Task Creator/i)).toBeVisible();
  await expect(
    page.getByText(/Task creator using tanstack react-table/i),
  ).toBeVisible();

  await expect(
    page.getByTestId("67574211b5599f1ebce84868-actions-button"),
  ).toBeVisible();

  await page.getByTestId("67574211b5599f1ebce84868-actions-button").click();

  await page.getByRole("menuitem", { name: "Edit Task" }).click();
  await expect(page.getByText("Edit Task")).toBeVisible();

  await page
    .getByRole("textbox", { name: "Title" })
    .fill("Updated task for ui tests");

  await page.getByTestId("task-form-submit-button").click();

  await expect(page.getByText("Updated task for ui tests")).toBeVisible();

  await expect(page.getByText("Task has been updated")).toBeVisible();
});
