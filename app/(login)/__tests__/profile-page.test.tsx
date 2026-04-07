import { render, screen } from "@testing-library/react";
import ProfilePage from "../login/profile/page";

describe("Profile Page", () => {
  it("renders Profile Page", async () => {
    render(<ProfilePage />);
    expect(
      screen.getByText("PROFILE NOT ADMIN BUT LOGGED REQUIRED"),
    ).toBeInTheDocument();
  });
});
