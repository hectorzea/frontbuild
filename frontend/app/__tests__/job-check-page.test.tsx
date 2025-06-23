import { render, screen } from "@testing-library/react";
import JobCheckPage from "@/app/[locale]/projects/job-check/page";

describe("Job Check", () => {
  it("renders page", () => {
    render(<JobCheckPage />);
    expect(screen.getByText("Job linter")).toBeInTheDocument();
    expect(
      screen.getByTestId("no-data-job-check-container")
    ).toBeInTheDocument();
    expect(
      screen.getByTestId("submit-button-job-check-form")
    ).toBeInTheDocument();
  });
});
