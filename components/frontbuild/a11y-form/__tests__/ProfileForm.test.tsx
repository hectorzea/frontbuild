import { render, screen, within } from "@testing-library/react";
import ProfileForm from "../ProfileForm";
import { NextIntlClientProvider } from "next-intl";
import en from "@/i18n/messages/en.json";
import userEvent from "@testing-library/user-event";

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
  it("Submit With All fields empty - should show errors", async () => {
    //scrollIntoView
    window.HTMLElement.prototype.scrollIntoView = jest.fn();
    render(
      <NextIntlClientProvider locale="en" messages={en}>
        <ProfileForm />
      </NextIntlClientProvider>,
    );

    expect(screen.getByTestId("ay11-form-submit-button")).toBeInTheDocument();
    const user = userEvent.setup();
    await user.click(screen.getByTestId("ay11-form-submit-button"));

    const inputContainer = screen
      .getByTestId("ay11-form-name-input")
      .closest('[role="group"]') as HTMLElement;

    const errorMessage = within(inputContainer).getByRole("alert");

    expect(errorMessage).toHaveTextContent("Your name is required.");
  });
});
