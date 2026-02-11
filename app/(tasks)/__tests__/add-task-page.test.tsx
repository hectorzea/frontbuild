import { renderWithProviders, runNewTaskFormTests } from "@/lib/test-utils";
import AddNewTaskPage from "@/app/(tasks)/tasks/new/page";

describe("Add new task page", () => {
  it("renders page and submit a task creation without filling fields - ERROR", async () => {
    renderWithProviders(<AddNewTaskPage />);
    await runNewTaskFormTests();
  });
});
