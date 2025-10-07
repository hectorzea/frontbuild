import { render, screen } from "@testing-library/react";
import HomePage from "@/app/[locale]/page";
import { NextIntlClientProvider } from "next-intl";
import en from "@/i18n/messages/en.json";

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  use: () => ({ locale: "en" }),
}));

describe("Home Page - ", () => {
  it("renders a heading", () => {
    render(
      <NextIntlClientProvider locale="en" messages={en}>
        <HomePage />
      </NextIntlClientProvider>
    );
    expect(screen.getByText("Hector Zea")).toBeInTheDocument();
    expect(
      screen.getByText(
        "Building the web and technology with curiosity, innovation, and quality"
      )
    ).toBeInTheDocument();
  });
});
