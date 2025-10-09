import { screen, waitFor } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import MulliganPage from "@/app/[locale]/projects/hs-card-search/mulligan/page";
import { renderWithProviders } from "../test-utils";

describe("Mulligan Page - ", () => {
  it("Render full UI", async () => {
    renderWithProviders(<MulliganPage />);

    expect(screen.getByTestId("hs-mulligan-creator-page"));

    await waitFor(() => {
      expect(screen.getByTestId("mulligan-table-title"));
      expect(screen.getByTestId("add-new-match-mulligan"));
    });
  });
});
