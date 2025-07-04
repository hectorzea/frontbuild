import { render, screen, waitFor } from "@testing-library/react";
import { JobCheckForm } from ".";
import userEvent from "@testing-library/user-event";
import { setupServer } from "msw/node";
import { handlers } from "@/app/mocks/handlers";

const server = setupServer(...handlers);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("Render <JobCheckForm /> and check match on a job offer", async () => {
  const user = userEvent.setup();
  render(<JobCheckForm />);

  const input = screen.getByTestId("job-check-input-field");
  expect(
    screen.getByText("Please, enter linkedIN job URL to initiate the lint")
  ).toBeInTheDocument();
  expect(
    screen.getByTestId("submit-button-job-check-form")
  ).toBeInTheDocument();

  await user.type(input, "wwww.linkedin.com/jobs/view/123456789/");

  await user.click(screen.getByTestId("submit-button-job-check-form"));

  //async call action to the backend, so we need to wait for the result a bit
  await waitFor(() => {
    expect(screen.getByTestId("job-title")).toBeInTheDocument();
  });
});
