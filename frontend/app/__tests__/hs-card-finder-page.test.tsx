import { render, screen } from "@testing-library/react";
import HearthstoneCardFinder from "@/app/[locale]/projects/hs-card-finder/page";

describe("Hearthstone Card Finder", () => {
  it("renders page", () => {
    render(<HearthstoneCardFinder />);
    expect(screen.getByText("HS CARD FINDER")).toBeInTheDocument();
  });
});
