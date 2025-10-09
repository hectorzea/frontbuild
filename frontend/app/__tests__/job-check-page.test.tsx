import { render, screen, waitFor } from "@testing-library/react";
import JobCheckPage from "@/app/[locale]/projects/job-check/page";
import userEvent from "@testing-library/user-event";

describe("Job Check - ", () => {
  it("Render page", async () => {
    const user = userEvent.setup();
    render(<JobCheckPage />);
    expect(screen.getByText("Job linter")).toBeInTheDocument();

    const input = screen.getByTestId("job-check-input-field");
    expect(
      screen.getByText("Please, enter linkedIN job URL to initiate the lint")
    ).toBeInTheDocument();

    await user.type(input, "wwww.linkedin.com/jobs/view/123456789/");

    expect(
      screen.getByTestId("submit-button-job-check-form")
    ).toBeInTheDocument();

    await user.click(screen.getByTestId("submit-button-job-check-form"));

    //async call action to the backend, so we need to wait for the result a bit
    await waitFor(() => {
      expect(screen.getByTestId("job-title")).toBeInTheDocument();
    });
  });
});
