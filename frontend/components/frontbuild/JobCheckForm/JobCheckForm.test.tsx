import { render, screen } from "@testing-library/react";
import { JobCheckForm } from ".";
import userEvent from "@testing-library/user-event";

test("renderiza tabla con 2 filas", async () => {
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

  expect(screen.getByTestId("loading-svg")).toBeInTheDocument();
});
