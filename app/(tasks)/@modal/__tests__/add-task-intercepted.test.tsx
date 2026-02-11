import { screen, waitFor } from "@testing-library/react";
import InterceptedPage from "@/app/(tasks)/@modal/(.)tasks/new/page";
import userEvent from "@testing-library/user-event";
import { renderWithProviders } from "@/app/(frontbuild)/test-utils";

//TODO: intercepted page test is the same test as add-task-page, find better no duplication
describe("Add new task page", () => {
  it("renders page and submit a task creation without filling fields - ERROR", async () => {
    const user = userEvent.setup();
    //Reminder: Render with providers and Redux on Server Page --> Client Page
    renderWithProviders(await InterceptedPage());

    expect(screen.getByTestId("task-form-title")).toBeInTheDocument();
    expect(screen.getByTestId("task-form-status")).toBeInTheDocument();
    expect(screen.getByTestId("task-form-label")).toBeInTheDocument();
    expect(screen.getByTestId("task-form-priority")).toBeInTheDocument();

    await user.click(screen.getByTestId("task-form-submit-button"));

    await waitFor(() => {
      expect(screen.getByText("Title is required")).toBeInTheDocument();
    });
  });
});
