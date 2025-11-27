import { render, screen } from "@testing-library/react";
import ServerError from "../Error";

describe("Home Page - ", () => {
  it("Renders Complete UI", () => {
    render(
      <ServerError
        message="An error has ocurred"
        description="Test error happened to check"
      />
    );
    expect(screen.getByText("An error has ocurred")).toBeInTheDocument();
    expect(
      screen.getByText("Test error happened to check")
    ).toBeInTheDocument();
  });
});
