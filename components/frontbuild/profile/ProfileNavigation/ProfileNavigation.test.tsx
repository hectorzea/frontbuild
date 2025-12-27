import { ProfileNavigation } from ".";
import { render, screen } from "@testing-library/react";
import { NextIntlClientProvider } from "next-intl";
import en from "@/i18n/messages/en.json";

test("Loads <ProfileNavigation/>", () => {
  render(
    <NextIntlClientProvider locale="en" messages={en}>
      <ProfileNavigation />
    </NextIntlClientProvider>
  );

  expect(
    screen.getByTestId("navigation-menu-button-desktop")
  ).toBeInTheDocument();
});
