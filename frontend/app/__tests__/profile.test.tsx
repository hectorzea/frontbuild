import { render, screen } from "@testing-library/react";
import ProfileIndexPage from "@/app/[locale]/profile/page";

describe("Page", () => {
  it("renders a heading", () => {
    render(<ProfileIndexPage />);
    expect(screen.getByText("Profile Page Title")).toBeInTheDocument();
  });
});
