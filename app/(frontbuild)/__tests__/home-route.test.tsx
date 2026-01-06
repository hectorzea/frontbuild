import { render, screen } from "@testing-library/react";
import IndexPage from "@/app/(frontbuild)/page";

describe("IndexPage", () => {
  it("is rendering correctly", () => {
    render(<IndexPage />);
    expect(screen.getByTestId("frontbuild-home-page")).toBeInTheDocument();
  });
});
