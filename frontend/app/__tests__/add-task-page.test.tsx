import { screen, waitFor } from "@testing-library/react";
import { renderWithProviders } from "@/app/test-utils";
import AddNewTaskPage from "@/app/[locale]/projects/tasks/new/page";
import userEvent from "@testing-library/user-event";

describe("Add new task page", () => {
  it("renders page and submit a task creation without filling fields - ERROR", async () => {
    const user = userEvent.setup();
    renderWithProviders(<AddNewTaskPage />);

    expect(screen.getByTestId("task-form-title")).toBeInTheDocument();
    expect(screen.getByTestId("task-form-status")).toBeInTheDocument();
    expect(screen.getByTestId("task-form-label")).toBeInTheDocument();
    expect(screen.getByTestId("task-form-priority")).toBeInTheDocument();

    await user.click(screen.getByTestId("task-form-submit-button"));

    await waitFor(() => {
      expect(screen.getByText("Title is required")).toBeInTheDocument();
      expect(screen.getByText("Select a status")).toBeInTheDocument();
      expect(screen.getByText("Select a priority")).toBeInTheDocument();
      expect(screen.getByText("Select a label")).toBeInTheDocument();
    });
  });
});
