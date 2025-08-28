import { render, screen } from "@testing-library/react";
import CraftingSoftware from "@/app/[locale]/profile/crafting-software/page";
import { NextIntlClientProvider } from "next-intl";
import en from "@/i18n/messages/en.json";

describe("CraftingSoftware", () => {
  it("renders CraftingSoftware Page", () => {
    render(
      <NextIntlClientProvider locale="en" messages={en}>
        <CraftingSoftware />
      </NextIntlClientProvider>
    );
    expect(screen.getByText(/Understanding the business/i)).toBeInTheDocument();
  });
});
