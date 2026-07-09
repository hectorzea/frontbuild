import { screen, render, waitFor } from "@testing-library/react";
import A11yFormPage from "../page";
import en from "@/i18n/messages/en.json";
import { NextIntlClientProvider } from "next-intl";

describe("a11y Page ", () => {
  it("Render Component", async () => {
    render(
      <NextIntlClientProvider locale="en" messages={en}>
        <A11yFormPage />
      </NextIntlClientProvider>,
    );

    await waitFor(() => {
      expect(screen.getByTestId("ay11-form-bio-input")).toBeInTheDocument();
      expect(screen.getByTestId("section-a11y-form")).toBeInTheDocument();
    });
  });
});
