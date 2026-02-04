import { screen, waitFor } from "@testing-library/react";
import { renderWithProviders } from "@/app/(frontbuild)/test-utils";
import DeleteTaskPage from "@/app/(tasks)/tasks/delete/[id]/page";
import userEvent from "@testing-library/user-event";
import { server } from "@/mocks/server";
import { http, HttpResponse } from "msw";

describe("Delete Task Page - ", () => {
  it("check render after receiving an correct id", async () => {
    const user = userEvent.setup();
    const paramsPromise = Promise.resolve({ id: "67574211b5599f1ebce84868" });
    renderWithProviders(await DeleteTaskPage({ params: paramsPromise }));

    await waitFor(() => {
      expect(
        screen.getByText(
          "This action cannot be undone. This will permanently delete your task from our servers.",
        ),
      ).toBeInTheDocument();
    });

    await user.click(screen.getByTestId("delete-task-submit-button"));

    await waitFor(() => {
      expect(screen.getByText("Task deleted")).toBeInTheDocument();
    });
  });

  it("check render after receiving an correct id - ERROR server", async () => {
    server.use(
      http.delete(
        `${process.env.NEXT_PUBLIC_FRONTBUILD_HZ_SERVER_URL}/api/tasks/:id`,
        () => {
          return new HttpResponse("Internal Server Error", { status: 500 });
        },
      ),
    );
    const user = userEvent.setup();
    const paramsPromise = Promise.resolve({ id: "67574211b5599f1ebce84868" });
    renderWithProviders(await DeleteTaskPage({ params: paramsPromise }));

    await waitFor(() => {
      expect(
        screen.getByText(
          "This action cannot be undone. This will permanently delete your task from our servers.",
        ),
      ).toBeInTheDocument();
    });

    await user.click(screen.getByTestId("delete-task-submit-button"));

    await waitFor(() => {
      expect(
        screen.getByText("An error has ocurred when deleting the task"),
      ).toBeInTheDocument();
    });
  });
});
