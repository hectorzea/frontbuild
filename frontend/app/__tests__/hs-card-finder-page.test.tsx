import { render, screen } from "@testing-library/react";
import HearthstoneCardSearch from "@/app/[locale]/projects/hs-card-search/page";

describe("Hearthstone Card Search", () => {
  it("renders page", () => {
    render(<HearthstoneCardSearch />);
    expect(screen.getByTestId("hs-card-search-page")).toBeInTheDocument();
  });
});
