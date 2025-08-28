import { render, screen } from "@testing-library/react";
import TestingPage from "@/app/[locale]/profile/testing/page";
import { NextIntlClientProvider } from "next-intl";
import en from "@/i18n/messages/en.json";

describe("TestingPage", () => {
  it("renders TestingPage component", async () => {
    render(
      <NextIntlClientProvider locale="en" messages={en}>
        <TestingPage />
      </NextIntlClientProvider>
    );
    expect(screen.getByText("Testing page title")).toBeInTheDocument();
  });
});
