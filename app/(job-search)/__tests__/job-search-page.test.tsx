import { render, screen, waitFor } from "@testing-library/react";
import JobCheckPage from "@/app/(job-search)/job-search/page";
import userEvent from "@testing-library/user-event";

describe("Job Check - ", () => {
  it("Render page, add a link and success search", async () => {
    const user = userEvent.setup();
    render(<JobCheckPage />);
    expect(screen.getByText("Job Lint")).toBeInTheDocument();

    const input = screen.getByTestId("job-check-input-field");
    expect(
      screen.getByText("Enter LinkedIN Url and start the research!"),
    ).toBeInTheDocument();

    await user.type(input, "https://www.linkedin.com/jobs/view/4382174904");

    expect(
      screen.getByTestId("submit-button-job-check-form"),
    ).toBeInTheDocument();

    await user.click(screen.getByTestId("submit-button-job-check-form"));

    //async call action to the backend, so we need to wait for the result a bit
    await waitFor(() => {
      expect(screen.getByTestId("job-title")).toBeInTheDocument();
    });
  });
  it("Render page, add link and error search", async () => {
    const user = userEvent.setup();
    render(<JobCheckPage />);
    expect(screen.getByText("Job Lint")).toBeInTheDocument();

    const input = screen.getByTestId("job-check-input-field");
    expect(
      screen.getByText("Enter LinkedIN Url and start the research!"),
    ).toBeInTheDocument();

    await user.type(input, "https://www.linkedin.com/jobs/view/4382174999");

    expect(
      screen.getByTestId("submit-button-job-check-form"),
    ).toBeInTheDocument();

    await user.click(screen.getByTestId("submit-button-job-check-form"));

    //async call action to the backend, so we need to wait for the result a bit
    await waitFor(() => {
      expect(
        screen.getByText("An error has ocurred, do the call again"),
      ).toBeInTheDocument();
    });
  });
});
