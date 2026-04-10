import { render, screen } from "@testing-library/react";
import AdminPage from "../login/admin/page";

describe("Profile Page", () => {
  it("renders Profile Page", async () => {
    render(<AdminPage />);
    expect(screen.getByText("ADMIN!!!")).toBeInTheDocument();
  });
});
