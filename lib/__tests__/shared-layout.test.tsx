import { render, screen } from "@testing-library/react";
import Layout from "@/app/(tasks)/layout";
describe("MyLayout", () => {
  it("renders the footnote", () => {
    render(Layout({ children: <div>Children</div>, modal: <div>Modal</div> }));
    const children = screen.getByText("Children");
    const modal = screen.getByText("Modal");
    expect(children).toBeInTheDocument();
    expect(modal).toBeInTheDocument();
  });
});
