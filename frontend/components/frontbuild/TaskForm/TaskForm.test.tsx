import React from "react";
import { screen } from "@testing-library/react";
import { TaskForm } from ".";
import { renderWithProviders } from "@/app/test-utils";
import { tasks } from "@/app/mocks/taskHandlers";

test("Loads <TaskForm /> and check for main elements", async () => {
  renderWithProviders(
    <TaskForm
      mode={"add"}
      defaultValues={{ title: "", label: "", priority: "", status: "" }}
      onOpenChange={jest.fn()}
    />,
    {
      preloadedState: {
        tasks: {
          tasks: tasks,
        },
        app: {
          labels: [
            {
              _id: "6758497311466283e44f1158",
              value: "bug",
              label: "Bug",
            },
            {
              _id: "6758497311466283e44f1133",
              value: "feature",
              label: "Feature",
            },
            {
              _id: "6758497311466283e44f1134",
              value: "tech-debt",
              label: "Tech-Debt",
            },
            {
              _id: "6758497311466283e44f1135",
              value: "epic",
              label: "Epic",
            },
            {
              _id: "6758497311466283e44f1136",
              value: "documentation",
              label: "Documentation",
            },
          ],
          statuses: [
            {
              _id: "67574211b5599f1ebce83868",
              value: "todo",
              label: "Todo",
            },
            {
              _id: "67574211b5599f1ebce33868",
              value: "in-progress",
              label: "In progress",
            },
            {
              _id: "67574211b5599f1ebce22868",
              value: "done",
              label: "Done",
            },
            {
              _id: "67574211b5599f1ebce44868",
              value: "cancelled",
              label: "Cancelled",
            },
            {
              _id: "675743bc6331e0a65f26442a",
              value: "backlog",
              label: "Backlog",
            },
          ],
          priorities: [
            {
              label: "Low",
              value: "low",
            },
            {
              label: "Medium",
              value: "medium",
            },
            {
              label: "High",
              value: "high",
            },
          ],
        },
      },
    },
  );
  expect(await screen.findByTestId("task-form-title")).toBeInTheDocument();
  expect(await screen.findByTestId("task-form-status")).toBeInTheDocument();
  expect(await screen.findByTestId("task-form-label")).toBeInTheDocument();
  expect(await screen.findByTestId("task-form-priority")).toBeInTheDocument();
});
