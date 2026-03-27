import { test, expect } from "@playwright/test";

//TODO - FLAKY TESTS?
test.describe("Tasks Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/tasks");
    await page.waitForLoadState("networkidle");
  });

  test("ADD", async ({ page }) => {
    await expect(page.getByText(/Easy Task Creator/i)).toBeVisible();
    await expect(
      page.getByText(/Task creator using tanstack react-table/i),
    ).toBeVisible();

    const link = page.getByTestId("add-task-link-button");
    const modal = page.getByRole("dialog");

    await expect(async () => {
      await link.click();
      await expect(modal).toBeVisible({ timeout: 2000 });
    }).toPass({ timeout: 15000 });

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

  test("EDIT", async ({ page }) => {
    await expect(page.getByText(/Easy Task Creator/i)).toBeVisible();
    await expect(
      page.getByText(/Task creator using tanstack react-table/i),
    ).toBeVisible();

    const actionsButton = page.getByTestId(
      "67574211b5599f1ebce84868-actions-button",
    );
    const modal = page.getByRole("dialog");

    await expect(actionsButton).toBeVisible();

    // Reintentar: abrir menú + click edit hasta que el modal aparezca
    await expect(async () => {
      await actionsButton.click();
      await page
        .getByRole("menuitem", { name: "Edit Task" })
        .click({ timeout: 2000 });
      await expect(modal).toBeVisible({ timeout: 2000 });
    }).toPass({ timeout: 15000 });

    await page
      .getByRole("textbox", { name: "Title" })
      .fill("Updated task for ui tests");

    await page.getByTestId("task-form-submit-button").click();

    await expect(page.getByText("Updated task for ui tests")).toBeVisible();

    await expect(page.getByText("Task has been updated")).toBeVisible();
  });

  test("DELETE", async ({ page }) => {
    await expect(page.getByText(/Easy Task Creator/i)).toBeVisible();
    await expect(
      page.getByText(/Task creator using tanstack react-table/i),
    ).toBeVisible();

    const actionsButton = page.getByTestId(
      "67574211b5599f1ebce84868-actions-button",
    );

    await expect(actionsButton).toBeVisible();

    await expect(async () => {
      await actionsButton.click();
      await page
        .getByRole("menuitem", { name: "Delete" })
        .click({ timeout: 2000 });
    }).toPass({ timeout: 15000 });

    await page.getByTestId("delete-task-submit-button").click();

    await expect(
      page.getByText("Do something with the tests"),
    ).not.toBeVisible();

    await expect(page.getByText("Task has been deleted.")).toBeVisible();
  });
});
