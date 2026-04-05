import { screen, waitFor } from "@testing-library/react";
import { renderWithProviders } from "@/lib/test-utils";
import LoginPage from "../login/page";

describe("Login Page", () => {
  it("renders Login Page", async () => {
    renderWithProviders(<LoginPage />, {
      preloadedState: {
        auth: {
          accessToken: null,
          user: null,
        },
      },
    });
    expect(screen.getByTestId("login-title")).toBeInTheDocument();
    expect(screen.getByTestId("login-email-input")).toBeInTheDocument();
    expect(screen.getByTestId("login-password-input")).toBeInTheDocument();
    expect(screen.getByTestId("submit-login-button")).toBeInTheDocument();
    expect(screen.getByTestId("login-title")).toBeInTheDocument();
    expect(screen.getByTestId("logout-button")).toBeInTheDocument();

    // await waitFor(() => {
    //   expect(screen.getByTestId("frontbuild-title")).toBeInTheDocument();
    // });
  });
  it("renders Login Page - Submit not success", async () => {});
});
