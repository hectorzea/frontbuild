import { render, screen } from "@testing-library/react";
import ProfileLayout from "@/app/[locale]/profile/layout";
import { NextIntlClientProvider } from "next-intl";
import en from "@/i18n/messages/en.json";

const mockUsePathname = jest.fn();

jest.mock("next/navigation", () => ({
  usePathname() {
    return mockUsePathname();
  },
}));

describe("ProfileLayout page", () => {
  it("renders a profile layout", () => {
    render(
      <NextIntlClientProvider locale="en" messages={en}>
        <ProfileLayout>test</ProfileLayout>
      </NextIntlClientProvider>
    );
    expect(screen.getByTestId("frontbuild-profile-layout")).toBeInTheDocument();
  });
});
