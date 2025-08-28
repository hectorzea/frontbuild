import { render, screen } from "@testing-library/react";
import TestingPage from "@/app/[locale]/profile/testing/page";

describe("TestingPage", () => {
  it("renders TestingPage component", () => {
    render(<TestingPage />);
    expect(screen.getByText("Testing page title")).toBeInTheDocument();
  });
});
