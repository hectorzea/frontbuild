import { render, screen } from "@testing-library/react";
import UnauthorizedPage from "@/app/unauthorized/page";

describe("Profile Page", () => {
  it("renders Profile Page", async () => {
    render(<UnauthorizedPage />);
    expect(screen.getByText("Unauthorized")).toBeInTheDocument();
  });
});
