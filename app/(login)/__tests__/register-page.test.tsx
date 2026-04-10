import { screen, waitFor } from "@testing-library/react";
import { renderWithProviders } from "@/lib/test-utils";
import RegisterPage from "../login/register/page";
import userEvent from "@testing-library/user-event";

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
  it("renders Register Page - Submit Success", async () => {
    renderWithProviders(<RegisterPage />, {
      preloadedState: {
        auth: {
          accessToken: null,
          user: null,
        },
      },
    });

    const user = userEvent.setup();

    const inputEmail = screen.getByTestId("register-email-input");
    const inputPassword = screen.getByTestId("register-password-input");

    await user.type(inputEmail, "reg-succ@test.test");
    await user.type(inputPassword, "password");

    await user.click(screen.getByTestId("register-submit-button"));

    await waitFor(() => {
      expect(screen.getByText("Register success")).toBeInTheDocument();
    });
  });
  it("renders Register Page - Submit Error", async () => {
    renderWithProviders(<RegisterPage />, {
      preloadedState: {
        auth: {
          accessToken: null,
          user: null,
        },
      },
    });
    const user = userEvent.setup();

    const inputEmail = screen.getByTestId("register-email-input");
    const inputPassword = screen.getByTestId("register-password-input");

    await user.type(inputEmail, "reg-error@test.test");
    await user.type(inputPassword, "password");

    await user.click(screen.getByTestId("register-submit-button"));

    await waitFor(() => {
      expect(screen.getByText("Error registering user")).toBeInTheDocument();
    });
  });
});
