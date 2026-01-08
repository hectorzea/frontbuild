import { screen, waitFor } from "@testing-library/react";
import MulliganPage from "@/app/(frontbuild)/[locale]/projects/hs-card-search/mulligan/page";
import { renderWithProviders } from "../test-utils";

describe("Mulligan Page - ", () => {
  it("Render full UI", async () => {
    renderWithProviders(<MulliganPage />);

    await waitFor(() => {
      expect(screen.getByTestId("mulligan-table-title")).toBeInTheDocument();
      expect(
        screen.getByRole("link", { name: "Add new match" })
      ).toHaveAttribute("href", "/projects/hs-card-search/mulligan/new-match");
    });
  });
});
