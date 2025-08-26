import { render, screen } from "@testing-library/react";
import HomePage from "@/app/[locale]/page";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  use: () => ({ locale: "en" }),
}));

describe("Page", () => {
  it("renders a heading", () => {
    render(<HomePage params={Promise.resolve({ locale: "en" })} />);
    expect(
      screen.getByText(
        "Hi, my name is Hector Zea, this is my personal portfolio, im a software enginer focused in building web applications."
      )
    ).toBeInTheDocument();
    expect(screen.getByText("Go to my profile")).toBeInTheDocument();
  });
});
