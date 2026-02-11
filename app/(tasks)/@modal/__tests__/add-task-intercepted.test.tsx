import InterceptedPage from "@/app/(tasks)/@modal/(.)tasks/new/page";
import { renderWithProviders, runNewTaskFormTests } from "@/lib/test-utils";

describe("Add new task page", () => {
  it("renders page and submit a task creation without filling fields - ERROR", async () => {
    //Reminder: Render with providers and Redux on Server Page that renders a Client Component
    //Reminder: This test isolate the logic of the form that happens in the client component and in the intercepted page
    renderWithProviders(await InterceptedPage());
    await runNewTaskFormTests();
  });
});
