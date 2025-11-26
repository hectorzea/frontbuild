import { render, screen } from "@testing-library/react";
import HearthstoneCardSearchPage from "@/app/[locale]/projects/hs-card-search/page";

describe("Hearthstone Card Search", () => {
  it("renders page", () => {
    render(<HearthstoneCardSearchPage />);
    expect(screen.getByTestId("hs-card-search-page")).toBeInTheDocument();
    expect(
      screen.getByTestId("submit-button-card-search-form")
    ).toBeInTheDocument();
  });
});
