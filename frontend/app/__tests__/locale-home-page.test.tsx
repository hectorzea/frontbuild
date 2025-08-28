import { render, screen } from "@testing-library/react";
import HomePage from "@/app/[locale]/page";
import { NextIntlClientProvider } from "next-intl";
import en from "@/i18n/messages/en.json";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  use: () => ({ locale: "en" }),
}));

describe("Page", () => {
  it("renders a heading", () => {
    render(
      <NextIntlClientProvider locale="en" messages={en}>
        <HomePage params={Promise.resolve({ locale: "en" })} />
      </NextIntlClientProvider>
    );
    expect(
      screen.getByText(
        "Hi, my name is Hector Zea, this is my personal portfolio, im a software enginer focused in building web applications."
      )
    ).toBeInTheDocument();
    expect(screen.getByText("Go to my projects")).toBeInTheDocument();
  });
});
