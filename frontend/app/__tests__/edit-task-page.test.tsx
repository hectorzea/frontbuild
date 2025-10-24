import { screen, waitFor } from "@testing-library/react";
import { renderWithProviders } from "@/app/test-utils";
import EditTaskPage from "@/app/[locale]/projects/tasks/edit/[id]/page";
import { editTaskMockId } from "@/mocks/handlers/taskHandlers";
import { server } from "@/mocks/server";
import { http, HttpResponse } from "msw";

describe("Edit Task page", () => {
  it("should render task not found id page - WRONG ID", async () => {
    const paramsPromise = Promise.resolve({ id: "123123" });
    renderWithProviders(await EditTaskPage({ params: paramsPromise }));

    await waitFor(() => {
      expect(screen.getByText("Error getting task by id")).toBeInTheDocument();
    });
  });

  it("should render edit task form - CORRECT ID", async () => {
    const paramsPromise = Promise.resolve({ id: editTaskMockId });
    renderWithProviders(await EditTaskPage({ params: paramsPromise }));

    await waitFor(() => {
      expect(screen.getByTestId("task-form-title")).toBeInTheDocument();
      expect(screen.getByLabelText("Title")).toHaveValue(
        "Do something with the tests"
      );
    });
  });

  it("should not render edit task form - renders error screen", async () => {
    server.use(
      http.get(
        `${process.env.NEXT_PUBLIC_FRONTBUILD_HZ_SERVER_URL}/api/tasks/:id`,
        () => {
          return new HttpResponse("Internal Server Error", { status: 500 });
        }
      )
    );
    const paramsPromise = Promise.resolve({ id: editTaskMockId });
    renderWithProviders(await EditTaskPage({ params: paramsPromise }));

    // Esto es INCORRECTO, getByTestId devuelve un ERROR
    // await waitFor(() => {
    //   expect(screen.getByTestId("task-form-title")).not.toBeInTheDocument();
    // });

    // Esto es CORRECTO, queryByTestId devuelve NULL de un elemento pero sigue ejecutando el test
    await waitFor(() => {
      expect(screen.queryByTestId("task-form-title")).not.toBeInTheDocument();
      expect(screen.getByText("Error getting task by id")).toBeInTheDocument();
    });
  });
});
