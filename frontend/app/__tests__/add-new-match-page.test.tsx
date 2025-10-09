import { render, screen } from "@testing-library/react";
import ParallelRoutePage from "@/app/[locale]/projects/hs-card-search/mulligan/new-match/page";

describe("Add New Match Page - ", () => {
  it("Render full UI", async () => {
    render(<ParallelRoutePage />);
    expect(screen.getByText("New Match")).toBeInTheDocument();
    expect(
      screen.getByText("Add the match URL and indicate W / L")
    ).toBeInTheDocument();
  });
});
