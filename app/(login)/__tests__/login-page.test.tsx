import { screen, waitFor } from "@testing-library/react";
import { renderWithProviders } from "@/lib/test-utils";
import LoginPage from "../login/page";
import userEvent from "@testing-library/user-event";

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
    expect(screen.getByTestId("logout-button")).toBeInTheDocument();

    // await waitFor(() => {
    //   expect(screen.getByTestId("frontbuild-title")).toBeInTheDocument();
    // });
  });
  it("renders Login Page - Submit Success", async () => {
    renderWithProviders(<LoginPage />, {
      preloadedState: {
        auth: {
          accessToken: null,
          user: null,
        },
      },
    });
    const user = userEvent.setup();

    const inputEmail = screen.getByTestId("login-email-input");
    const inputPassword = screen.getByTestId("login-password-input");

    await user.type(inputEmail, "successUser@test.abc");
    await user.type(inputPassword, "password");

    await user.click(screen.getByTestId("submit-login-button"));

    await waitFor(() => {
      expect(
        screen.getByText("Logged in as successUser@test.abc"),
      ).toBeInTheDocument();
    });
  });
  it("renders Login Page - Submit Error", async () => {
    renderWithProviders(<LoginPage />, {
      preloadedState: {
        auth: {
          accessToken: null,
          user: null,
        },
      },
    });
    const user = userEvent.setup();

    const inputEmail = screen.getByTestId("login-email-input");
    const inputPassword = screen.getByTestId("login-password-input");

    await user.type(inputEmail, "errorUser@test.abc");
    await user.type(inputPassword, "password");

    await user.click(screen.getByTestId("submit-login-button"));

    await waitFor(() => {
      expect(screen.getByText("Error on login user")).toBeInTheDocument();
    });
  });
});
