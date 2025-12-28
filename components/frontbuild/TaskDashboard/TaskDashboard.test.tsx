import { screen } from "@testing-library/react";
import { TaskDashboard } from ".";
import { renderWithProviders } from "@/app/test-utils";
import { tasksMock as tasks } from "@/mocks/data/mockData";

test("Loads <TaskDashboard /> and check for main elements", async () => {
  renderWithProviders(
    <TaskDashboard
      subtitle={
        "Task creator using tanstack react-table and react-hook-form with zod schema validation."
      }
      title={"Frontbuild App"}
    />,
    {
      preloadedState: {
        tasks: {
          tasks: tasks,
        },
      },
    }
  );

  expect(await screen.findByTestId("frontbuild-title")).toBeInTheDocument();
  expect(
    await screen.findByText(/Render pipelines without a trace/i)
  ).toBeInTheDocument();
});

test("Loads <TaskDashboard /> and check for main elements", async () => {
  renderWithProviders(
    <TaskDashboard
      subtitle={
        "Task creator using tanstack react-table and react-hook-form with zod schema validation."
      }
      title={"Frontbuild App"}
    />,
    {
      preloadedState: {
        tasks: {
          tasks: [],
        },
      },
    }
  );

  expect(await screen.findByTestId("frontbuild-title")).toBeInTheDocument();
  expect(await screen.findByText(/No results/i)).toBeInTheDocument();
});
