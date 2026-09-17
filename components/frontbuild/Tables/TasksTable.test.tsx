import { fireEvent, screen } from "@testing-library/react";
import { renderWithProviders } from "@/lib/test-utils";
import { tasksMock as tasks } from "@/mocks/tasks/data";
import TasksTable from "./TasksTable";

test("renderiza tabla con 2 filas", async () => {
  renderWithProviders(<TasksTable tasks={tasks} />, {
    preloadedState: {
      tasks: {
        tasks: tasks,
      },
    },
  });
  //tests with 3 rows and the header
  expect(await screen.findByTestId("tasks-table")).toBeInTheDocument();
  expect(screen.getAllByRole("row")).toHaveLength(6);
  expect(screen.getByText("Do something with the tests")).toBeInTheDocument();
});

test("renderiza tabla sin items", () => {
  renderWithProviders(<TasksTable tasks={[]} />, {
    preloadedState: {
      tasks: {
        tasks: [],
      },
    },
  });
  expect(screen.getAllByRole("row")).toHaveLength(2);
  expect(screen.getByText("No results.")).toBeInTheDocument();
});

test("filtra tareas por texto", async () => {
  const { getByPlaceholderText } = renderWithProviders(
    <TasksTable tasks={tasks} />,
    {
      preloadedState: {
        tasks: {
          tasks: tasks,
        },
      },
    },
  );

  fireEvent.change(getByPlaceholderText("Filter tasks..."), {
    target: { value: "Render pipelines without a trace" },
  });

  expect(screen.getAllByRole("row")).toHaveLength(2); // Header + 1 fila filtrada
});
