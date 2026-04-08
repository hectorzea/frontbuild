import { screen, waitFor } from "@testing-library/react";
import { renderWithProviders } from "@/lib/test-utils";
import RegisterPage from "../login/register/page";

describe("Register Page", () => {
  it("renders Register Page", async () => {
    renderWithProviders(<RegisterPage />, {
      preloadedState: {
        auth: {
          accessToken: null,
          user: null,
        },
      },
    });
    expect(screen.getByTestId("register-title")).toBeInTheDocument();
    expect(screen.getByTestId("register-email-input")).toBeInTheDocument();
    expect(screen.getByTestId("register-password-input")).toBeInTheDocument();
    expect(screen.getByTestId("register-back-button")).toBeInTheDocument();
    expect(screen.getByTestId("register-submit-button")).toBeInTheDocument();

    // await waitFor(() => {
    //   expect(screen.getByTestId("frontbuild-title")).toBeInTheDocument();
    // });
  });
  it("renders Register Page - Submit Success", async () => {});
  it("renders Register Page - Submit Error", async () => {});
  it("renders Register Page - Session Closed Success", async () => {});
  it("renders Register Page - Session Closed Error", async () => {});
});
