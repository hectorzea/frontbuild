import { screen, waitFor } from "@testing-library/react";
import InterceptedPage from "@/app/(tasks)/@modal/(.)tasks/edit/[id]/page";
import { renderWithProviders } from "@/lib/test-utils";
import { editTaskMockId } from "@/mocks/handlers/taskHandlers";

describe("Edit new task page", () => {
  it("Basic Render with correct ID intercepted page", async () => {
    const paramsPromise = Promise.resolve({ id: editTaskMockId });
    renderWithProviders(await InterceptedPage({ params: paramsPromise }));

    await waitFor(() => {
      expect(screen.getByTestId("task-form-title")).toBeInTheDocument();
      expect(screen.getByLabelText("Title")).toHaveValue(
        "Do something with the tests",
      );
    });
  });
});
