import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { NextIntlClientProvider } from "next-intl";
import HomePage from "@/app/[locale]/page";
import en from "@/i18n/messages/en.json";

test("Page", () => {
  render(
    <NextIntlClientProvider locale="en" messages={en}>
      <HomePage />
    </NextIntlClientProvider>
  );
  expect(
    screen.getByText(
      "Building the web and technology with curiosity, innovation, and quality"
    )
  ).toBeDefined();
});
