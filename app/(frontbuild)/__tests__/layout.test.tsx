import Layout from "@/app/(frontbuild)/layout";
import { render, screen } from "@testing-library/react";

jest.mock("next-intl", () => ({
  NextIntlClientProvider: ({ children }: { children: React.ReactNode }) => (
    <>{children}</>
  ),
}));

describe("MyLayout", () => {
  it("renders the footnote", () => {
    render(Layout({ children: <>Children</> }));
    const children = screen.getByText("Children");
    expect(children).toBeInTheDocument();
    expect(screen.getByTestId("theme-mode-toggle-button")).toBeInTheDocument();
  });
});
