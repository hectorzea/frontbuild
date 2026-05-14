import { render, screen } from "@testing-library/react";
import ProfileForm from "../ProfileForm";
import { NextIntlClientProvider } from "next-intl";
import en from "@/i18n/messages/en.json";

describe("Profile Form ", () => {
  it("Render Component", () => {
    render(
      <NextIntlClientProvider locale="en" messages={en}>
        <ProfileForm />
      </NextIntlClientProvider>,
    );

    expect(screen.getByTestId("ay11-form-name-input")).toBeInTheDocument();
    expect(screen.getByTestId("ay11-form-email-input")).toBeInTheDocument();
    expect(screen.getByTestId("ay11-form-bio-input")).toBeInTheDocument();
    expect(screen.getByTestId("ay11-form-submit-button")).toBeInTheDocument();
  });
});
