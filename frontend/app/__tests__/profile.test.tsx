import { render, screen } from "@testing-library/react";
import ProfileIndexPage from "@/app/[locale]/profile/page";
import { NextIntlClientProvider } from "next-intl";
import en from "@/i18n/messages/en.json";

describe("Page", () => {
  it("renders a heading", () => {
    render(
      <NextIntlClientProvider locale="en" messages={en}>
        <ProfileIndexPage />
      </NextIntlClientProvider>
    );
    expect(screen.getByText("Profile Page Title")).toBeInTheDocument();
  });
});
