import Layout from "@/app/(frontbuild)/layout";
import { render, screen } from "@testing-library/react";

jest.mock("next-intl", () => ({
  NextIntlClientProvider: ({ children }: { children: React.ReactNode }) => (
    <>{children}</>
  ),
}));

jest.mock("next-intl/server", () => ({
  getLocale: () => "en",
  getTranslations: jest.fn(async ({ namespace }) => {
    return (key: string) => {
      const messages: Record<string, string> = {
        "profileForm.page.skipLink": "Skip to content",
        "profileForm.page.title": "Profile Settings",
        "profileForm.page.description": "Manage your profile",
      };
      return messages[`${namespace}.${key}`] || `${namespace}.${key}`;
    };
  }),
}));

describe("MyLayout", () => {
  it("renders the footnote", async () => {
    //todo async test change
    render(await Layout({ children: <>Children</> }));
    const children = screen.getByText("Children");
    expect(children).toBeInTheDocument();
  });
});
