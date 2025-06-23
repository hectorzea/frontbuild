import { render, screen } from "@testing-library/react";
import { JobCheckForm } from ".";
import userEvent from "@testing-library/user-event";

test("renderiza tabla con 2 filas", async () => {
  const user = userEvent.setup();
  render(<JobCheckForm />);
  expect(
    screen.getByText("Please, enter linkedIN job URL to initiate the lint")
  ).toBeInTheDocument();
  expect(
    screen.getByTestId("submit-button-job-check-form")
  ).toBeInTheDocument();

  await user.click(screen.getByTestId("submit-button-job-check-form"));

  expect(
    screen.getByTestId("submit-button-job-check-form")
  ).toBeInTheDocument();
});
