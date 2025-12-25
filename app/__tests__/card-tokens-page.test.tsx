import { screen, waitFor } from "@testing-library/react";
import { renderWithProviders } from "@/app/test-utils";
import CardTokensPage from "@/app/[locale]/projects/hs-card-search/tokens/[id]/page";

describe("Card Tokens Page", () => {
  it("Renders page - success / error ID", async () => {
    // TODO: ver como mockear el carousel
    const paramsPromise = Promise.resolve({ id: "TIME_619" });
    renderWithProviders(await CardTokensPage({ params: paramsPromise }));

    await waitFor(() => {
      expect(screen.getByText("Card Tokens")).toBeInTheDocument();
      expect(screen.getByTestId("carousel-card-tokens")).toBeInTheDocument();
    });
  });
});
