import { render, screen } from "@testing-library/react";
import { Loading } from "../Loading";

describe("Loading Page - ", () => {
  it("check render correctly", () => {
    render(<Loading loadingText="Loading something..." />);
    expect(screen.getByText("Loading something...")).toBeInTheDocument();
    expect(screen.getByTestId("loading-svg")).toBeInTheDocument();
  });
});
