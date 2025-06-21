import { render, screen } from "@testing-library/react";
import ProfileIndexPage from "@/app/[locale]/profile/page";

describe("Page", () => {
  it("renders a heading", () => {
    render(<ProfileIndexPage />);
    expect(
      screen.getByText(
        "I have interest interest in building front-end and deliver a nice UX",
      ),
    ).toBeInTheDocument();
  });
});
