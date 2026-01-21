import { screen, waitFor } from "@testing-library/react";
import { renderWithProviders } from "@/app/(frontbuild)/test-utils";
import EditTaskPage from "@/app/(frontbuild)/[locale]/projects/tasks/edit/[id]/page";
import { editTaskMockId } from "@/mocks/handlers/taskHandlers";
import { server } from "@/mocks/server";
import { http, HttpResponse } from "msw";
import userEvent from "@testing-library/user-event";

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

  it("should render edit task form and edit task CORRECTLY - CORRECT ID", async () => {
    const user = userEvent.setup();
    const paramsPromise = Promise.resolve({ id: editTaskMockId });
    renderWithProviders(await EditTaskPage({ params: paramsPromise }));

    await waitFor(() => {
      expect(screen.getByTestId("task-form-submit-button"));
      expect(screen.getByTestId("task-form-title")).toBeInTheDocument();
      //information from backend expected to be loaded
      expect(screen.getByLabelText("Title")).toHaveValue(
        "Do something with the tests"
      );
    });

    //we change some info into the task how to change text in tests
    // const input = screen.getByLabelText(/Title/i);
    // await user.type(input, "Test new title");
    // expect(input.value).toBe("13:58");

    //then we update the task
    await user.click(screen.getByTestId("task-form-submit-button"));

    await waitFor(() => {
      expect(screen.getByText("Edit task success")).toBeInTheDocument();
    });
  });

  it("should render edit task form and edit task ERROR backend on submission - CORRECT ID", async () => {
    server.use(
      http.patch(
        `${process.env.NEXT_PUBLIC_FRONTBUILD_HZ_SERVER_URL}/api/tasks/:id`,
        () => {
          return new HttpResponse("Internal Server Error", { status: 500 });
        }
      )
    );
    const user = userEvent.setup();
    const paramsPromise = Promise.resolve({ id: editTaskMockId });
    renderWithProviders(await EditTaskPage({ params: paramsPromise }));

    await waitFor(() => {
      expect(screen.getByTestId("task-form-title")).toBeInTheDocument();
    });

    await user.click(screen.getByTestId("task-form-submit-button"));

    await waitFor(() => {
      expect(screen.getByText("Error editing task")).toBeInTheDocument();
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
