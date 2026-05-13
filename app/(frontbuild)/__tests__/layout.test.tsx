import Layout from "@/app/(frontbuild)/layout";
import { render, screen } from "@testing-library/react";

jest.mock("next-intl", () => ({
  NextIntlClientProvider: ({ children }: { children: React.ReactNode }) => (
    <>{children}</>
  ),
}));

jest.mock("next-intl/server", () => ({
  getLocale: () => "es",
}));

describe("MyLayout", () => {
  it("renders the footnote", async () => {
    //todo async test change
    render(await Layout({ children: <>Children</> }));
    const children = screen.getByText("Children");
    expect(children).toBeInTheDocument();
  });
});
