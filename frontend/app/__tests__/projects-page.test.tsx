import { render, screen } from "@testing-library/react";
import ProjectsPage from "@/app/[locale]/projects/page";

describe("ProjectsPage", () => {
  it("renders Projects Page", () => {
    render(<ProjectsPage />);
    expect(screen.getByTestId("projects-page")).toBeInTheDocument();
  });
});
