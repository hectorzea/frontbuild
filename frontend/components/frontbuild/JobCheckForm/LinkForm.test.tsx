import { render, screen } from "@testing-library/react";
import { JobCheckForm } from "./";

test("renderiza tabla con 2 filas", () => {
  render(<JobCheckForm />);
  expect(
    screen.getByText("Please, enter linkedIN job URL to initiate the lint")
  ).toBeInTheDocument();
  expect(
    screen.getByTestId("submit-button-job-check-form")
  ).toBeInTheDocument();
});
